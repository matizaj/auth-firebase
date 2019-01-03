import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(formData: NgForm) {
    this.auth.login(formData.value.email, formData.value.password);
  }

  signup(formdata: NgForm) {
    this.auth.signup(formdata.value.email, formdata.value.password);
  }

}
