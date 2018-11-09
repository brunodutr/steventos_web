import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageNotAuthorizedComponent } from "../pages/impl/errors/page-not-authorized/page-not-authorized.component";
import { PageNotFoundComponent } from "../pages/impl/errors/page-not-found/page-not-found.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PageNotFoundComponent, PageNotAuthorizedComponent],
  exports: []
})
export class ErrorsModule {}
