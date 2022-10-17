import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  readonly _url='http://localhost:3000/sendMessage'
  constructor(private http:HttpClient) { }

  SendMessage(contactsForm:any){
    console.log(contactsForm.value);
    return this.http.post(this._url, {
      Fullname: contactsForm.value.Fullname,
      email: contactsForm.value.email,
      message:contactsForm.value.message
    });
  }
}
