import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GlobalVariablesService } from './global-variables.service';
import 'rxjs/add/operator/do';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private globalVariables: GlobalVariablesService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.globalVariables.hidePreloader.emit(false);
    this.globalVariables.progress.emit(5);

    return next.handle(request).do(
      (event: HttpEvent<any>) => {
        if (event.type == HttpEventType.DownloadProgress) {
          var progress = Math.round(100 * event.loaded / event.total);
          this.globalVariables.progress.emit(progress);
        }
      },
      (error) => {
        // this.globalVariables.hidePreloader.emit(true);
        this.globalVariables.progress.emit(100);
      },
      () => {
        // this.globalVariables.hidePreloader.emit(true);
        this.globalVariables.progress.emit(100);
      }
    );
    

  }

}
