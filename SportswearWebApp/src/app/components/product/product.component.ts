import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Products = {} as Products;

  constructor(private cartservice: CartService) { }
  addToCart(id: any) {
    
    this.cartservice.addproduct(id).subscribe((data) => {
      console.log(id)
    })
  }
  ngOnInit(): void {

  }

}
