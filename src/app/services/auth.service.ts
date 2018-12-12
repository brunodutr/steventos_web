import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { User } from "firebase";
import { BehaviorSubject } from "rxjs";
import { Pessoa } from "../models/pessoa.model";
import { PessoaService } from "./impl/pessoa.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  usuarioLogado$: BehaviorSubject<Pessoa> = new BehaviorSubject(new Pessoa());

  constructor(
    private localStorage: LocalStorage,
    private auth: AngularFireAuth,
    private pessoaService: PessoaService
  ) {
    this.auth.authState.subscribe((result: User) => {
      if (result.email) {
        this.setUsuarioLogado(result.email);
      }
    });
  }

  createUser(email: string, senha: string): Promise<any> {
    return this.auth.auth.createUserWithEmailAndPassword(email, senha);
  }

  async logout() {
    await this.auth.auth.signOut();
    this.usuarioLogado$.next(new Pessoa());
  }

  async authenticate(email: string, senha: string) {
    await this.auth.auth.signInWithEmailAndPassword(email, senha);

    let token = await this.auth.idToken;

    this.localStorage.setItem("token", token);

    this.setUsuarioLogado(email);
  }

  private setUsuarioLogado(email: string) {
    this.pessoaService
      .findByEmail(email)
      .subscribe((result: Pessoa) => this.usuarioLogado$.next(result));
  }
}
