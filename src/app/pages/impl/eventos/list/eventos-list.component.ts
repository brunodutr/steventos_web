import { Component, OnInit } from "@angular/core";
import { Evento } from "src/app/models/evento.model";
import { EventoService } from "src/app/services/impl/eventos.service";

@Component({
  templateUrl: "../../../abstract/list/abstract.list.html"
})
export class EventosListComponent implements OnInit {
  constructor(public service: EventoService) {}

  ngOnInit() {}

  displayList(): Function {
    return Evento.display();
  }
}
