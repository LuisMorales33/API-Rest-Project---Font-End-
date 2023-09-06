import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constans';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticateUser';

@Injectable({
  providedIn: 'root'
})

export class authLoginService {

  constructor(
    private http:HttpClient
    ) { }

  executeAuthenticationService(username:string, password:string){   

    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    let headers:HttpHeaders = new HttpHeaders(
      {

        Authorization: basicAuthHeaderString
      
      }
    )

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username)
          sessionStorage.setItem(TOKEN, basicAuthHeaderString)
          return data
        }
      )
    )
  }

  executeJWTAuthenticationService(username:string, password:string){   

    

    return this.http.post<any>(`${API_URL}/authenticate`, {
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username)
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
          return data
        }
      )
    )
  }

  getAuthenticated(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }
  
  getAuthenticatedToken(){
    if (this.getAuthenticated()) {
      return sessionStorage.getItem(TOKEN)
    }
    return null
  }
  
  isUserLoggedIn(){
    let user= sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }



}

export class AuthenticationBean{
  constructor(public message:string){}
}
