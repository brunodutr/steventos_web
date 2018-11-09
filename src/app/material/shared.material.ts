import { NgModule } from "@angular/core";
import {
  MatAutocompleteModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";

@NgModule({
  imports: [MatAutocompleteModule, MatCardModule, MatInputModule],
  exports: [MatAutocompleteModule, MatCardModule, MatInputModule]
})
export class SharedMaterial {}
