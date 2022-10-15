import { Component,Input,OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Products = {} as Products;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
