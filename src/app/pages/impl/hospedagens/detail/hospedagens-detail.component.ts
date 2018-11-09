import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Hospedagem } from "src/app/models/hospedagem.model";
import { AbstractDetailComponent } from "src/app/pages/abstract/detail/abstract-detail.component";
import { HospedagemService } from "src/app/services/impl/hospedagem.service";

@Component({
  selector: "app-hospedagens-detail",
  templateUrl: "./hospedagens-detail.component.html",
  styleUrls: ["./hospedagens-detail.component.scss"]
})
export class HospedagensDetailComponent extends AbstractDetailComponent<
  Hospedagem
> {
  constructor(
    public aRoute: ActivatedRoute,
    public hService: HospedagemService
  ) {
    super(aRoute, hService);
  }
}
