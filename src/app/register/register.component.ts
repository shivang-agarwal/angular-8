import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { UserResponse } from '../classes/user/UserResponse';
import { UserRegisterRequest } from '../classes/user/UserRegisterRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSubmit(form) {
    const userRegisterRequest = new UserRegisterRequest(form.value.name, form.value.email, form.value.password);
    this.authService.register(userRegisterRequest)
    .subscribe( userResponseData => {
      console.log(userResponseData);
      this.authService.logIn(userResponseData)
    });
  }

}
