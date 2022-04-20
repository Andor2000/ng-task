import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { messages } from './models/messages.model';
import { users } from './models/users.model';
import { themes } from './models/themes.model';
import { messagesService } from '../../service/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  phoneMask = ['+', '7',' ', '(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];

  messages : messages[] = [];
  users : users[] = [];
  themes : themes[] = [];
  
  help :boolean = false;

  fname = '';
  femail = '';
  fphone = '';

  newMessage : messages = {
    id: '',
    idUser: '',
    theme: '',
    message: ''
  }

  newUser : users = {
    id: '',
    name: '',
    email: '',
    phone: ''
  }

  captcha:string;

  constructor(private messagesService: messagesService) { 
    this.captcha ='';
  }

  resolved(captchaResponse:string){
    this.captcha = captchaResponse;

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
        //  console.log(response);        
       }
     );
   }
   
   getAllUsers(){
     this.messagesService.getAllUsers()
     .subscribe(
       response => {
         this.users = response;
        //  console.log(response);
         
       }
     );
   }
 
   getAllthemes(){
     this.messagesService.getAllthemes()
     .subscribe(
       response => { 
         this.themes = response;
        //  console.log(response);
         
       }
     );
   }

   onSumbit(){
      for(let user of this.users){    // перебираем всех пользователей
        if(user.email == this.femail && user.phone == this.fphone){ // если почта и телефон совпадают
          this.newMessage.idUser = String(user.id);          // запоминаем ид пользователя
           
          this.messagesService.addMessage(this.newMessage)  // отправляем все нужные данные (идЮзера, тему, сообщение) 
                                                            // ид сообщение само генерируется
          .subscribe(
            reponse => {              
              this.getAllmessages();              
            }
          );
          
          this.help = true;
          break;
        }      
      } 
      
      if(!this.help){ // не нашел пользователя
        this.newUser.email = this.femail;
        this.newUser.name = this.fname;
        this.newUser.phone = this.fphone;

        
        this.messagesService.addUser(this.newUser)  
          .subscribe(
            reponse => {   
              this.newMessage.idUser =String(reponse.id);              
              this.messagesService.addMessage(this.newMessage)  
              .subscribe(
                reponse => {         
                  this.getAllUsers();     
                  this.getAllmessages();              
                }
              );                 
            }
          );
          this.help = false;
      }
   }

}
