import { Local } from "../../../models/local.model";
import { CidadeService } from "../../../services/cidades.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class AbstractList {
  type: string = "ABSTRACT";

  searchForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public cService: CidadeService) {
    this.searchForm = this.formBuilder.group({
      dataIni: ["", []],
      dataFim: ["", []],
      local: ["", [Validators.required]],
      destino: ["", []]
    });
  }

  displayLocal(): Function {
    return Local.display();
  }

  private valid() {
    return (
      this.searchForm.get("dataIni").value === "" &&
      this.searchForm.get("dataFim").value === "" &&
      this.searchForm.get("local").value === "" &&
      this.searchForm.get("destino").value === ""
    );
  }

  pesquisar() {
    console.log(this.searchForm.value);
  }

  format(): string {
    if (this.type === "HOSPEDAGEM") {
      return "Minhas Hospedagens:";
    } else if (this.type === "EVENTO") {
      return "Meus Eventos:";
    } else if (this.type === "TRANSPORTE") {
      return "Meus Transportes:";
    } else {
      return "Lista:";
    }
  }
}
