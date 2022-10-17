import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private authService: AuthService , private router:Router) { }

  ngOnInit(): void {

  }
  register() {
    this.authService.Register(this.registerForm.controls["username"].value, this.registerForm.controls["email"].value, this.registerForm.controls["password"].value).subscribe(

    )
    this.router.navigate(['/login']);
  }
}
