import { Component, OnInit } from "@angular/core";
import { Hospedagem } from "src/app/models/hospedagem.model";
import { AbstractList } from "src/app/pages/abstract/list/abstract.list";
import { CidadeService } from "src/app/services/cidades.service";
import { HospedagemService } from "src/app/services/impl/hospedagem.service";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "../../../abstract/list/abstract.list.html"
})
export class HospedagensListComponent extends AbstractList implements OnInit {
  
  type: string = "HOSPEDAGEM";
  id: number;

  constructor(
    public formBuilder: FormBuilder,
    public service: HospedagemService,
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
    return Hospedagem.display();
  }
}
