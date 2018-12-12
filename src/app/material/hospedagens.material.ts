import { NgModule } from "@angular/core";
import { MatCardModule, MatDatepickerModule } from "@angular/material";

@NgModule({
  imports: [MatCardModule, MatDatepickerModule],
  exports: [MatCardModule, MatDatepickerModule]
})
export class HospedagensMaterial {}
