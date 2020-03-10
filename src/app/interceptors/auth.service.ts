import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor {

  public getToken(): string {
    const token: string = 'Basic YWxhZGRpbjpvcGVuc2VzYW1l';

    return token;
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: this.getToken()
      }
    });
    return next.handle(request);
  }
}
