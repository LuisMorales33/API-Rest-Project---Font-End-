import { Component } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  name='in28minutes'
  responseMessage = '';
  constructor(
    private service:WelcomeDataService){
  }

  handleMessageWithPath(){
    this.service.executeMessageWithPath(this.name).subscribe(
      response => this.responseApi(response),
      error => this.responseApiError(error)
    );  
  }
  
  responseApi(response:any){
      this.responseMessage = response.message;
    }

  responseApiError(error:any){
    this.responseMessage = error.error.message;
  }

}
