import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './app.routing';

const config = {
  apiKey: 'AIzaSyAIxfHR4Gu-KuGCmwJ36OyjIMdVHAAlkwQ',
  authDomain: 'auth-6a435.firebaseapp.com',
  databaseURL: 'https://auth-6a435.firebaseio.com',
  projectId: 'auth-6a435',
  storageBucket: 'auth-6a435.appspot.com',
  messagingSenderId: '463586340244'
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
