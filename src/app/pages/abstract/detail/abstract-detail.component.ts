import { ActivatedRoute } from "@angular/router";
import { SteventosService } from "../../../services/steventos.service";
import { AuthService } from "src/app/services/auth.service";
import { Pessoa } from "src/app/models/pessoa.model";
import { GenericUtils } from "src/app/utils/generic.utils";

export class AbstractDetailComponent<T> {
  id: number;
  object: T;
  usuario: Pessoa;

  constructor(
    public authService: AuthService,
    public activatedRoute: ActivatedRoute,
    public service: SteventosService<T>
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params["id"];
      this.service.getId(this.id).subscribe((res: T) => (this.object = res));
    });

    this.authService.usuarioLogado$.subscribe((result: Pessoa) => {
      this.usuario = result;
    });
  }

  deletar(id) {
    this.service.delete(id);
  }

  participar(id) {
    let objeto = GenericUtils.getGenericObject(Pessoa, this.usuario);

    if (objeto.perfil === "ADMINISTRADOR") {
      objeto.perfil = 0;
    } else if (objeto.perfil === "DONO_RECURSO") {
      objeto.perfil = 1;
    } else {
      objeto.perfil = 2;
    }

    this.service.setField(id, "pessoas", objeto);
  }
}
