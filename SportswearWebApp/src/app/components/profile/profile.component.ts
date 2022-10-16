import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ProfileData !: User;

  constructor(private profileservice : ProfileService) {
    this.profileservice.getUserData().subscribe((res)=>{

      this.ProfileData=res

    })
  }

  ngOnInit(): void {

  }

}
