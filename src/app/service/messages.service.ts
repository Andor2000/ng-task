import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { messages } from '../components/login/models/messages.model';
import { themes } from '../components/login/models/themes.model';
import { users } from '../components/login/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class messagesService {

  baseUrl1 = 'https://localhost:7154/api/messages'
  baseUrl2 = 'https://localhost:7154/api/themes'
  baseUrl3 = 'https://localhost:7154/api/users'

  constructor(private http: HttpClient) { }

  // get all messages
  getAllmessages(): Observable<messages[]>{
    return this.http.get<messages[]>(this.baseUrl1);
  }
  // get all themes
  getAllthemes(): Observable<themes[]>{
    return this.http.get<themes[]>(this.baseUrl2);
  }
  // get all users
  getAllUsers(): Observable<users[]>{
    return this.http.get<users[]>(this.baseUrl3);
  }

  addMessage(newMessage:messages): Observable<messages> {
    newMessage.id = '0';
          
    return this.http.post<messages>(this.baseUrl1, newMessage);
  }

  addUser(newUser:users): Observable<users> {
    newUser.id = '0';    
    return this.http.post<users>(this.baseUrl3, newUser);
 }



}
