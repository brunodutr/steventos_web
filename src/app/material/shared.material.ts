import { NgModule } from "@angular/core";
import {
  MatAutocompleteModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatAutocompleteModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedMaterial {}
