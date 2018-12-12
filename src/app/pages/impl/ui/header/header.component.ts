import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Pessoa } from "src/app/models/pessoa.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  pages: Page[] = [
    {
      name: "Hospedagens",
      path: "/hospedagens"
    },
    {
      name: "Transportes",
      path: "/transportes"
    }
  ];
  usuario: Pessoa;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.usuarioLogado$.subscribe(
      (result: Pessoa) => (this.usuario = result)
    );
  }
  getUserLink(path: string){
    return `/${path}/usuario/${this.usuario.id}`
  }
  logout(){
    this.auth.logout();
  }
}

export interface Page {
  name: string;
  path: string;
}
