import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  user: any = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }
  vaild: any
  iSValidate(user: any) {
    if (user.status == false) {
      return false
      //this.vaild = "Please Enter Right Username and Password";

    }
    else {
      //this.vaild = ""
      return true
    }
  }
  login() {
    this.isLoading = true;
    this.authService.login(this.user.username, this.user.password).subscribe(
      (data) => {

        if (this.iSValidate(data)) {
          this.authService.saveToken(data);
          console.log(data)
          this.isLoading = false;
          this.router.navigate(['']);
        }
        else {
          //console.log(error);
          alert('Please enter a valid username or password');
          this.isLoading = false;
        }


        // this.authService.saveToken(data);
        // console.log(data)
        // this.isLoading = false;
        // this.router.navigate(['']);
        // },
        // (error) => {
        //   console.log(error);
        //   alert('Please enter a valid username or password');
        //   this.isLoading = false;
      }
    );
  }
}
