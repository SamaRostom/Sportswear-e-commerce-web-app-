import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @Input() id: any
  constructor(private cartservice: CartService ,private router: Router, private route: ActivatedRoute) {}
  price: any;
  Ship: any;
  public items: Array<any> = []
  delete(id: any) { this.cartservice.removeproduct(id).subscribe((data) => { window.location.reload() }) }
  inc(id: any) { this.cartservice.inc(id).subscribe((data) => { window.location.reload() }) }
  dec(id: any) { this.cartservice.dec(id).subscribe((data) => { window.location.reload() }) }


  ngOnInit(): void {

    this.cartservice.getShip().subscribe(
      (data) => {

        this.Ship = data;
        console.log(this.Ship)
        console.log(this.id)

      }
    )
    this.cartservice.getPrice().subscribe(
      (data) => {

        this.price = data;
        console.log(this.price)

      }
    )

    this.cartservice.getData().subscribe(
      (data) => {

        this.items.push(data)
        console.log(this.price)

      },
      (error) => {
        console.log(error);
      }
    )

  }





  



}

