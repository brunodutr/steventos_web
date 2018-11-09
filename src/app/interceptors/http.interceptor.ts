import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  token: string = "DEFAULT";
  constructor(private router: Router, private localStorage: LocalStorage) {}

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.token
    })
  };

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem("token");
    const dupReq = req.clone(this.httpOptions);
    return next.handle(dupReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 401) {
          this.router.navigate["/unauthorized"];
        }
        return event;
      })
    );
  }
}
