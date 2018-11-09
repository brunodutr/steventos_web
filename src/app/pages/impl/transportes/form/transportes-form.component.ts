import { Component, OnInit } from "@angular/core";
import { TransporteService } from "src/app/services/impl/transporte.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CidadeService } from "src/app/services/cidades.service";
import { Transporte } from "src/app/models/transporte.model";
import { Local } from "src/app/models/local.model";

@Component({
  selector: "app-transportes-form",
  templateUrl: "./transportes-form.component.html",
  styleUrls: ["./transportes-form.component.scss"]
})
export class TransportesFormComponent implements OnInit {
  tForm: FormGroup;
  constructor(
    public tService: TransporteService,
    public cService: CidadeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.tForm = this.formBuilder.group({
      id: [""],
      valor: ["", [Validators.required]],
      origem: ["", [Validators.required]],
      destino: ["", [Validators.required]]
    });
  }

  setTransporte(t: Transporte) {
    this.tForm.controls.id.setValue(t.id);
    this.tForm.controls.valor.setValue(t.valor);
    this.tForm.controls.origem.setValue(t.origem);
    this.tForm.controls.destino.setValue(t.destino);
  }

  displayLocal(): Function {
    return Local.display();
  }
}
