import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constans';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(public http : HttpClient) { }

  executeMessageWithPath(name:string){   

    // let authHeader = this.createAuthHttp()
    // let headers:HttpHeaders = new HttpHeaders(
    //   {

    //     Authorization: authHeader
      
    //   }
    // )

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/variable/${name}`
    // , {headers}
    );
  }

//   createAuthHttp(){
//     let username = 'in28minutes'
//     let password = 'dummy'
//     let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);

//     return basicAuthHeaderString;
//   }
}
