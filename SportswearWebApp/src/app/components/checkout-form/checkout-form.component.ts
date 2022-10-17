import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  isLoading: boolean = false;
  checkoutForm: FormGroup = new FormGroup({
    cardNumber: new FormControl('', [Validators.required,Validators.maxLength(19),Validators.minLength(19)]),
    name: new FormControl('', [Validators.required]),
    cvv: new FormControl('', [Validators.required,Validators.maxLength(3),Validators.minLength(3)]),
    expire: new FormControl('', [Validators.required,Validators.maxLength(5),Validators.minLength(5)])
  });

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
  }

  DoCheckout(){
    this.isLoading = true;
    this.cartservice.checkout(this.checkoutForm).subscribe(
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
