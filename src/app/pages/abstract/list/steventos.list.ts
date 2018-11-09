import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { SteventosService } from "src/app/services/steventos.service";


@Component({
  selector: "steventos-list",
  templateUrl: "./steventos.list.html"
})
export class SteventosListComponent implements OnInit {
  @Input()
  service: SteventosService<any>;

  @Input()
  imagem: boolean;

  @Input()
  display: Function;

  objetos: Observable<any[]>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.objetos = this.service.getAll();
  }

  navigate(id: number) {
    this.router.navigateByUrl(`/${this.router.url}/${id}`);
  }
}
