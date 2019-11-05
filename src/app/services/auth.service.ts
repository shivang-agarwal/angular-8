import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { CONFIG } from '../config/config';
import { UserResponse } from '../classes/user/UserResponse';
import { UserRegisterRequest } from '../classes/user/UserRegisterRequest';
import { UserLoginRequest } from '../classes/user/UserLoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  register(userRegisterRequest: UserRegisterRequest): Observable<UserResponse> {
       return this.http.post<UserResponse>(`${CONFIG.API_URL}/register`, userRegisterRequest);
  }

  authenticate(userLoginRequest: UserLoginRequest): Promise<UserResponse> {
    console.log(userLoginRequest);
    return this.http.post<UserResponse>(`${CONFIG.API_URL}/authenticate`, userLoginRequest).toPromise();
  }

  logIn(userResponse: UserResponse): void {
    console.log(userResponse);
    localStorage.setItem('token', userResponse.token);
    localStorage.setItem('user', JSON.stringify(userResponse.user));
    this.router.navigate(['/dashboard']);
  }
}
