import { Component, OnInit } from "@angular/core";
import { Transporte } from "src/app/models/transporte.model";
import { TransporteService } from "src/app/services/impl/transporte.service";

@Component({
  templateUrl: "../../../abstract/list/abstract.list.html"
})
export class TransportesListComponent implements OnInit {
  constructor(public service: TransporteService) {}

  ngOnInit() {}

  displayList(): Function {
    return Transporte.display();
  }
}
