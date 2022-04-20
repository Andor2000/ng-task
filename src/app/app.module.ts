import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TextMaskModule } from 'angular2-text-mask'; // телефон
import { RecaptchaModule } from 'ng-recaptcha';
import { NgxCaptchaModule } from 'ngx-captcha';
// import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TextMaskModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
