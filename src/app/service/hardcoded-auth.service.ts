import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authUser(user:string, password:String){
  // console.log('auth before '+ this.isUserLoggedIn());
    if(user === 'in28minutes' && password === 'dummy'){
      sessionStorage.setItem('authenticateUser',user );
    //  console.log('auth after '+ this.isUserLoggedIn());
      return true;
    } else {
      return false
    }
  }

  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
