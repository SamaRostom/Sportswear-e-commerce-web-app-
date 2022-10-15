import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.httpClient.post('http://localhost:3000/auth/login', {
      username: username,
      password: password,
    });
  }

  saveToken(user: any) {
    localStorage.setItem('token', user.user.token);
    localStorage.setItem('id', user.user.id)
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}
