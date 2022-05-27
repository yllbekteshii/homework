import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
if(this._auth.getJwtToken()){
  request = this.addToken(request, this._auth.getJwtToken()||'')
}
return next.handle(request).pipe(
  catchError((error) => {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = `Error: ${error.error.message}`;
    }
    return throwError(errorMsg);
  })
)
  }
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
}
