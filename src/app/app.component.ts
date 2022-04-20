import { Component, OnInit } from '@angular/core';
import { messages } from './models/messages.model';
import { users } from './models/users.model';
import { themes } from './models/themes.model';
import { messagesService } from './service/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-task';
  messages : messages[] = [];
  users : users[] = [];
  themes : themes[] = [];

  constructor(private messagesService: messagesService) { 

  }

  ngOnInit(): void {
   this.getAllmessages(); 
   this.getAllUsers();
   this.getAllthemes();
  }

  getAllmessages(){
    this.messagesService.getAllmessages()
    .subscribe(
      response => {
        this.messages = response;
        // console.log(response);        
      }
    );
  }
  
  getAllUsers(){
    this.messagesService.getAllUsers()
    .subscribe(
      response => {
        this.users = response;
        // console.log(response);
        
      }
    );
  }

  getAllthemes(){
    this.messagesService.getAllthemes()
    .subscribe(
      response => {
        this.themes = response;
        // console.log(response);
        
      }
    );
  }
  
}
