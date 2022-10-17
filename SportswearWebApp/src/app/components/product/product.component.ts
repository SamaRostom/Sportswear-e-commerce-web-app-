import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { CartService } from 'src/app/cart.service';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  array: Array<any> = []
  @Input() product: Products = {} as Products;

  constructor(private cartservice: CartService, private authservice: AuthService) { }
  addToCart(id: any) {
    this.cartservice.getData().subscribe((data) => this.array.push(data));

    this.cartservice.addproduct(id).subscribe((data) => {
      console.log(id)
    })
  }
  logged() {
    return this.authservice.isLoggedIn()
  }
  ngOnInit(): void {

  }

}
