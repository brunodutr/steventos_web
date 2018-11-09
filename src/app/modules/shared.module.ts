import { NgModule } from "@angular/core";
import { CidadesAutocomplete } from "../shared/cidades-autocomplete/cidades-autocomplete.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedMaterial } from "../material/shared.material";
import { SteventosListComponent } from "../pages/abstract/list/abstract-list.component";
import { SteventosFormComponent } from "../pages/abstract/form/abstract-form.component";

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
