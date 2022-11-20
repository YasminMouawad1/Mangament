import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthEndpoints } from '../../../shared/services/endpoints/auth.endpoint.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private _authEndpoints:AuthEndpoints) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger
    if (!request.headers.has('Authorization')) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this._authEndpoints.token}`),
      });
    }

  return next.handle(request);
  }
}
