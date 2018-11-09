import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router, UrlSegment, Params } from "@angular/router";
import { SteventosService } from "src/app/services/steventos.service";
import { FormGroup } from "@angular/forms";
import { GenericUtils } from "src/app/utils/generic.utils";

@Component({
  selector: "steventos-form",
  templateUrl: "./abstract-form.component.html"
})
export class SteventosFormComponent<T> implements OnInit {
  @Input()
  service: SteventosService<T>;

  @Input()
  form: FormGroup;

  edit: boolean;

  @Output()
  setValue: EventEmitter<T> = new EventEmitter<T>();

  objeto: T;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.validRoute();
  }

  private validRoute() {
    this.activatedRoute.url.subscribe((urls: UrlSegment[]) => {
      if (urls[0].path === "edit") {
        this.edit = true;
        this.activatedRoute.params.subscribe((params: Params) => {
          this.service.getId(+params["id"]).subscribe(
            (res: T) => {
              this.objeto = res;
              this.setValue.emit(this.objeto);
            },
            () => {
              this.router.navigate(["/notfound"]);
            }
          );
        });
      }
    });
  }

  create() {
    this.service.create(this.form.value);
  }

  delete() {
    this.service.delete(+this.form.get("id").value);
  }

  update() {
    this.service.update(+this.form.get("id").value, this.form.value);
  }
}
