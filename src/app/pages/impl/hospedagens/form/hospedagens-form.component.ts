import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Hospedagem } from "src/app/models/hospedagem.model";
import { Local } from "src/app/models/local.model";
import { CidadeService } from "src/app/services/cidades.service";
import { HospedagemService } from "src/app/services/impl/hospedagem.service";

@Component({
  selector: "app-hospedagens-form",
  templateUrl: "./hospedagens-form.component.html",
  styleUrls: ["./hospedagens-form.component.scss"]
})
export class HospedagensFormComponent implements OnInit {
  hForm: FormGroup;
  constructor(
    public hService: HospedagemService,
    public cService: CidadeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.hForm = this.formBuilder.group({
      id: [""],
      nome: ["", [Validators.required]],
      local: ["", [Validators.required]]
    });
  }

  setHospedagem(h: Hospedagem) {
    this.hForm.controls.id.setValue(h.id);
    this.hForm.controls.nome.setValue(h.nome);
    this.hForm.controls.local.setValue(h.local);
  }

  displayLocal(): Function {
    return Local.display();
  }
}
