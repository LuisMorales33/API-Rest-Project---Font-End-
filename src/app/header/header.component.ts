import { Component } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  title = 'My app';
  //isUserLoggedIn : Boolean = false;

  constructor(public auth : HardcodedAuthService){}

  ngOnInit(){
    //this.isUserLoggedIn = this.auth.isUserLoggedIn();

  }

}
