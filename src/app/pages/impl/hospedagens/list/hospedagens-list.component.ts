import { Component, OnInit } from "@angular/core";
import { Hospedagem } from "src/app/models/hospedagem.model";
import { HospedagemService } from "src/app/services/impl/hospedagem.service";

@Component({
  templateUrl: "../../../abstract/list/abstract.list.html"
})
export class HospedagensListComponent implements OnInit {
  constructor(public service: HospedagemService) {}

  ngOnInit() {}

  displayList(): Function {
    return Hospedagem.display();
  }
}
