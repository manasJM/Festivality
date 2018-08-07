import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders

} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class APIRequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = request.clone({
        headers: this.setHeaders()
      });

    return next.handle(authReq);
  }

  setHeaders() {
    const apiClient1 = JSON.stringify({
        'apiClientId':"testing-account-draft",
        'apiToken': "$2y$10$8yO83tRZfVuTFRVrAoHdneazGbXzuDAu7uqWvVLt5df5gJhP4gL7K"
        });

    const deviceId = JSON.stringify({'deviceId':"c25cabd6-ff9e-2b16-d370-ff1def3884c7"});
    const httpOptions = new HttpHeaders()
    .set('X-APIClient', apiClient1)
    .set('X-Header-Request', deviceId)     
    
    return httpOptions;
}
}