import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GlobalVariablesService } from './global-variables.service';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private globalVariables: GlobalVariablesService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.globalVariables.hidePreloader.emit(false);
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {

      }
    },
    (error) => {
      this.globalVariables.hidePreloader.emit(true);
    },
    () => {
      this.globalVariables.hidePreloader.emit(true);
    });
  }

}
