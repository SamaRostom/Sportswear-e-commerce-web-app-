import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient, private router: Router) { }

  Register(username: string, password: string, email: string) {
    return this.httpClient.post('http://localhost:3000/auth/register', {
      username: username,
      password: password,
      email: email
    });

  }
  login(username: string, password: string) {
    return this.httpClient.post('http://localhost:3000/auth/login', {
      username: username,
      password: password,
    });

  }
  create(username: string, password: string) {
    return this.httpClient.post('http://localhost:3000/cart/create', {
      username: username,
      password: password,
    });

  }
  saveToken(user: any) {
    localStorage.setItem('token', user.token);
    console.log(localStorage.getItem('token'))
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}
