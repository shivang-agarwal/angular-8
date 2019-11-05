import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { UserLoginRequest } from './../classes/user/UserLoginRequest';
import { UserResponse } from './../classes/user/UserResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit(loginForm) {
    const userLoginRequest = new UserLoginRequest(loginForm.value.email, loginForm.value.password);
    this.authService.authenticate(userLoginRequest)
    .then( userResponse => this.authService.logIn(userResponse));
  }

}
