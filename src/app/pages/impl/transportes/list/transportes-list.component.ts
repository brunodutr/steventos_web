import { Component, OnInit } from "@angular/core";
import { Transporte } from "src/app/models/transporte.model";
import { AbstractList } from "src/app/pages/abstract/list/abstract.list";
import { CidadeService } from "src/app/services/cidades.service";
import { TransporteService } from "src/app/services/impl/transporte.service";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "../../../abstract/list/abstract.list.html"
})
export class TransportesListComponent extends AbstractList implements OnInit {
  
  type: string = "TRANSPORTE";
  id: number;

  constructor(
    public formBuilder: FormBuilder,
    public service: TransporteService,
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
    return Transporte.display();
  }
}
