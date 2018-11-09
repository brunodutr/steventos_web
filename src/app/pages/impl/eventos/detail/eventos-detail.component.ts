import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Evento } from "src/app/models/evento.model";
import { AbstractDetailComponent } from "src/app/pages/abstract/detail/abstract-detail.component";
import { EventoService } from "src/app/services/impl/eventos.service";

@Component({
  selector: "app-eventos-detail",
  templateUrl: "./eventos-detail.component.html",
  styleUrls: ["./eventos-detail.component.scss"]
})
export class EventosDetailComponent extends AbstractDetailComponent<Evento> {
  constructor(public aRoute: ActivatedRoute, public eService: EventoService) {
    super(aRoute, eService);
  }
}
