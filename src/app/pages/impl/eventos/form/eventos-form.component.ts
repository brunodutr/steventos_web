import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Evento } from "src/app/models/evento.model";
import { Local } from "src/app/models/local.model";
import { CidadeService } from "src/app/services/cidades.service";
import { EventoService } from "src/app/services/impl/eventos.service";

@Component({
  selector: "app-eventos-form",
  templateUrl: "./eventos-form.component.html",
  styleUrls: ["./eventos-form.component.scss"]
})
export class EventosFormComponent implements OnInit {
  eForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public eService: EventoService,
    public cService: CidadeService
  ) {}

  ngOnInit() {
    this.eForm = this.formBuilder.group({
      id: [""],
      nome: ["", [Validators.required]],
      descricao: ["", Validators.required],
      dataIni: ["", Validators.required],
      dataFim: ["", [Validators.required]],
      local: ["", Validators.required]
    });
  }

  setEvento(e: Evento) {
    this.eForm.controls.id.setValue(e.id);
    this.eForm.controls.nome.setValue(e.nome);
    this.eForm.controls.descricao.setValue(e.descricao);
    this.eForm.controls.local.setValue(e.local);
    this.eForm.controls.dataIni.setValue(e.dataIni);
    this.eForm.controls.dataFim.setValue(e.dataFim);
  }

  displayLocal(): Function {
    return Local.display();
  }
}
