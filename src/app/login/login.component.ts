import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { authLoginService } from '../service/http/authLogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user ='';
  password ='';
  invalidMessage = 'User/Password invalid!';
  sessionValidator = false;

  constructor(private router:Router,
    private auth:HardcodedAuthService,
    private authService:authLoginService){
      
  } 
  ngOnInit(){

  }

  handleLogin(){
    
    if (this.auth.authUser(this.user, this.password)) {
      this.sessionValidator = false;
      this.router.navigate(['home',this.user])
    } else {
      this.sessionValidator = true;  
    }
  }
  handleLoginService(){
    
    this.authService.executeAuthenticationService(this.user, this.password).subscribe(
      data => {
        console.log(data);
        
        this.sessionValidator = false;
        this.router.navigate(['home'])
      }, 
      error => {
        console.log(error);
        this.sessionValidator = true;  
      }
    )

  }  
  

handleJWTAuthLogin(){
    
    this.authService.executeJWTAuthenticationService(this.user, this.password).subscribe(
      data => {
        console.log(data);
        
        this.sessionValidator = false;
        this.router.navigate(['home'])
      }, 
      error => {
        console.log(error);
        this.sessionValidator = true;  
      }
    )

  }  
}
