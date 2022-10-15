import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private cartservice: CartService) {


  }


  public items: Array<any> = []


  ngOnInit(): void {
    this.cartservice.getData().subscribe(
      (data) => {

        this.items.push(data)
        console.log(data);

      },
      (error) => {
        console.log(error);
      }
    )


  }

  // get() {
  //   this.getcart.getFarms();
  //   console.log("done")
  // }
}
