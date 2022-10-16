import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice: AuthService) { }
  logout() {
    this.authservice.logout();
  }
  isLogedIn() {
    return this.authservice.isLoggedIn();
  }
  ngOnInit(): void {

  }

}
