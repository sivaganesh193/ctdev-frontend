import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

    constructor(private _authSerive: AuthService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if(this._authSerive.isAuthenticated()) {
            return next.handle(this._injectToken(request));
        }
        return next.handle(request);
    }

    _injectToken(request: HttpRequest<any>) {
        const token = this._authSerive.getToken();
        return request.clone({
            setHeaders: {
                Tokenstring: token,
            },
        });
    }
}
