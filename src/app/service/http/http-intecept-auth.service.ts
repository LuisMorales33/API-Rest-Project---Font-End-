import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authLoginService } from './authLogin.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInteceptAuthService implements HttpInterceptor{
  
  constructor(
    private authService : authLoginService
  ) { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'in28minutes'
    // let password = 'dummy'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`)
  
    let basicAuthHeaderString = this.authService.getAuthenticatedToken()
    let username = this.authService.getAuthenticated()


    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders: {
          Authorization:basicAuthHeaderString
        }
      })
    }
    return next.handle(request)  
  }


  // intercept(request: HttpRequest<any>, next: HttpHandler){
  //   let username = 'in28minutes'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`)
  
  //   request = request.clone({
  //     setHeaders: {
  //       Authorization:basicAuthHeaderString
  //     }
  //   })
  //   return next.handle(request)
  
  // }

}
