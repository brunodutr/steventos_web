import { ActivatedRoute } from "@angular/router";
import { SteventosService } from "../../../services/steventos.service";

export class AbstractDetailComponent<T> {
  id: number;
  object: T;

  constructor(
    public activatedRoute: ActivatedRoute,
    public service: SteventosService<T>
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params["id"];
      this.service.getId(this.id).subscribe((res: T) => (this.object = res));
    });
  }
}
