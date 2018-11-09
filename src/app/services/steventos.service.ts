import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GenericUtils } from "../utils/generic.utils";

const REST_URL =
  "http://steventos-steventos.1d35.starter-us-east-1.openshiftapps.com/rest";

export class SteventosService<T> {
  URL_REST: string;

  constructor(
    private http: HttpClient,
    private path: string,
    private clazz: any
  ) {
    this.URL_REST = `${REST_URL}/${this.path}`;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.URL_REST);
  }

  getId(id: number): Observable<T> {
    return this.http.get<T>(`${this.URL_REST}/${id}`);
  }

  create(entity: T): Promise<T> {
    let objeto = GenericUtils.getGenericObject(this.clazz, entity);
    return this.http.post<T>(this.URL_REST, objeto).toPromise();
  }

  update(id: number, entity: T): Promise<T> {
    let objeto = GenericUtils.getGenericObject(this.clazz, entity);
    return this.http.put<T>(`${this.URL_REST}/${id}`, objeto).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.http.delete(`${this.URL_REST}/${id}`).toPromise();
  }

  protected getField(id: number, campo: string): Observable<[]> {
    return this.http.get<[]>(`${this.URL_REST}/${id}/${campo}`);
  }

  protected setField(id: number, campo: string, entity: AddField<T>) {
    return this.http.post<T[]>(`${this.URL_REST}/${id}/${campo}`, entity);
  }

  getAutocomplete(filter: AutocompleteFilter) {
    return this.http.post<T[]>(`${this.URL_REST}/autocomplete`, filter);
  }
}

export interface AddField<T> {
  className: string;
  object: T;
}

export class AutocompleteFilter {
  private texto: string;
  private campo: string;

  constructor(texto, campo) {
    this.texto = texto;
    this.campo = campo;
  }
}
