import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EventoService } from "../services/impl/eventos.service";
import { SharedModule } from "./shared.module";
import { EventosListComponent } from "../pages/impl/eventos/list/eventos-list.component";
import { EventosFormComponent } from "../pages/impl/eventos/form/eventos-form.component";
import { EventosMaterial } from "../material/eventos.material";
import { EventosDetailComponent } from "../pages/impl/eventos/detail/eventos-detail.component";

const routes: Routes = [
  {
    path: "",
    component: EventosListComponent
  },
  {
    path: ":id",
    component: EventosDetailComponent
  },
  {
    path: "add/:id",
    component: EventosFormComponent
  },
  {
    path: "edit/:id",
    component: EventosFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    EventosMaterial,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EventosListComponent,
    EventosFormComponent,
    EventosDetailComponent
  ],
  exports: [RouterModule],
  providers: [EventoService]
})
export class EventosModule {}
