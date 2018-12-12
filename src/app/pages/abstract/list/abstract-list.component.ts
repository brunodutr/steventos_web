import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { SteventosService } from "src/app/services/steventos.service";

@Component({
  selector: "steventos-list",
  templateUrl: "./abstract-list.component.html"
})
export class SteventosListComponent implements OnInit {
  @Input()
  service: SteventosService<any>;

  @Input()
  imagem: boolean;

  @Input()
  display: Function;

  objetos: Observable<any[]>;

  id: number;

  constructor(public activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params["id"];
    });
  }

  ngOnInit(): void {
    this.buscar();
  }

  private buscar() {
    if (!this.id) {
      this.objetos = this.service.getAll();
    } else {
      this.objetos = this.service.getInverseField(this.id, "pessoas");
    }
  }

  async remover(e_id: number) {
    await this.service.removeField(e_id, this.id, "pessoas");
    this.buscar();
  }

  navigate(id: number) {
    if (!this.id) {
      this.router.navigateByUrl(`/${this.router.url}/${id}`);
    }
  }
}
