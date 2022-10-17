import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/Services/contact.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactsForm: FormGroup = new FormGroup({
    Fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private contactservice:ContactService) { }

  isLoading: boolean = false;

  ngOnInit(): void {
  }

  sendMessage() {

    this.isLoading = true;
    this.contactservice.SendMessage(this.contactsForm).subscribe(
      (data) => {
        console.log(data)
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

}
