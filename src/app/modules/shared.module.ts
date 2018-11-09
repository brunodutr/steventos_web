import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedMaterial } from "../material/shared.material";
import { SteventosFormComponent } from "../pages/abstract/form/abstract-form.component";
import { SteventosListComponent } from "../pages/abstract/list/abstract-list.component";
import { CidadesAutocomplete } from "../shared/cidades-autocomplete/cidades-autocomplete.component";

@NgModule({
  imports: [CommonModule, SharedMaterial, FormsModule, ReactiveFormsModule],
  declarations: [
    CidadesAutocomplete,
    SteventosListComponent,
    SteventosFormComponent
  ],
  exports: [CidadesAutocomplete, SteventosListComponent, SteventosFormComponent]
})
export class SharedModule {}
