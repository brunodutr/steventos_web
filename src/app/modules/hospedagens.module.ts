import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HospedagensListComponent } from "../pages/impl/hospedagens/list/hospedagens-list.component";
import { HospedagensDetailComponent } from "../pages/impl/hospedagens/detail/hospedagens-detail.component";
import { HospedagensFormComponent } from "../pages/impl/hospedagens/form/hospedagens-form.component";
import { HospedagensMaterial } from "../material/hospedagens.material";
import { HospedagemService } from "../services/impl/hospedagem.service";
import { SharedModule } from "./shared.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: HospedagensListComponent
  },
  {
    path: "add/:id",
    component: HospedagensFormComponent
  },
  {
    path: ":id",
    component: HospedagensDetailComponent
  },
  {
    path: "edit/:id",
    component: HospedagensFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HospedagensMaterial,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HospedagensListComponent,
    HospedagensDetailComponent,
    HospedagensFormComponent
  ],
  exports: [RouterModule],
  providers: [HospedagemService]
})
export class HospedagensModule {}
