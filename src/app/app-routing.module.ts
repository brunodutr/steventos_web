import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./pages/impl/errors/page-not-found/page-not-found.component";
import { PageNotAuthorizedComponent } from "./pages/impl/errors/page-not-authorized/page-not-authorized.component";

const routes: Routes = [
  { path: "", redirectTo: "/eventos", pathMatch: "full" },
  {
    path: "eventos",
    loadChildren: "./modules/eventos.module#EventosModule"
  },
  {
    path: "transportes",
    loadChildren: "./modules/transportes.module#TransportesModule"
  },
  {
    path: "hospedagens",
    loadChildren: "./modules/hospedagens.module#HospedagensModule"
  },
  {
    path: "unauthorized",
    component: PageNotAuthorizedComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
