import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable, of } from "rxjs";
import { debounceTime, startWith, switchMap } from "rxjs/operators";
import { Local } from "../../models/local.model";

@Component({
  selector: "cidades-autocomplete",
  templateUrl: "./cidades-autocomplete.component.html",
  styleUrls: ["./cidades-autocomplete.component.scss"]
})
export class CidadesAutocomplete implements OnInit {
  @Input()
  form: FormGroup;

  @Input()
  ctrlName: string;

  @Input()
  display: Function;

  @Input()
  searchFunction: Function;

  localObservable: Observable<Local[]>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.localObservable = this.form.get(this.ctrlName)!.valueChanges.pipe(
      startWith(""),
      debounceTime(500),
      switchMap(value => {
        if (value !== "") {
          return this.searchFunction(value);
        } else {
          return of(null);
        }
      })
    );
  }
}
