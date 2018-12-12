import { Component, OnInit } from "@angular/core";
import { Evento } from "src/app/models/evento.model";
import { EventoService } from "src/app/services/impl/eventos.service";
import { AbstractList } from "../../../abstract/list/abstract.list";
import { CidadeService } from "src/app/services/cidades.service";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "../../../abstract/list/abstract.list.html"
})
export class EventosListComponent extends AbstractList implements OnInit {
  
  type: string = "EVENTO";
  id: number;

  constructor(
    public service: EventoService,
    public formBuilder: FormBuilder,
    public cService: CidadeService,
    public activatedRoute: ActivatedRoute
  ) {
    super(formBuilder, cService);

    this.activatedRoute.params.subscribe(params => {
      this.id = +params["id"];
    });
  }

  ngOnInit() {}

  displayList(): Function {
    return Evento.display();
  }
}
