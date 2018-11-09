import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Transporte } from "src/app/models/transporte.model";
import { AbstractDetailComponent } from "src/app/pages/abstract/detail/abstract-detail.component";
import { TransporteService } from "src/app/services/impl/transporte.service";

@Component({
  selector: "app-transportes-detail",
  templateUrl: "./transportes-detail.component.html",
  styleUrls: ["./transportes-detail.component.scss"]
})
export class TransportesDetailComponent extends AbstractDetailComponent<Transporte> {
  constructor(
    public aRoute: ActivatedRoute,
    public tService: TransporteService
  ) {
    super(aRoute, tService);
  }
}
