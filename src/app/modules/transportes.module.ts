import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TransportesListComponent } from "../pages/impl/transportes/list/transportes-list.component";
import { TransportesDetailComponent } from "../pages/impl/transportes/detail/transportes-detail.component";
import { TransportesFormComponent } from "../pages/impl/transportes/form/transportes-form.component";
import { TransporteService } from "../services/impl/transporte.service";
import { SharedModule } from "./shared.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: TransportesListComponent
  },
  {
    path: ":id",
    component: TransportesDetailComponent
  },
  {
    path: "add/:id",
    component: TransportesFormComponent
  },
  {
    path: "edit/:id",
    component: TransportesFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    TransportesListComponent,
    TransportesFormComponent,
    TransportesDetailComponent
  ],
  exports: [RouterModule],
  providers: [TransporteService]
})
export class TransportesModule {}
