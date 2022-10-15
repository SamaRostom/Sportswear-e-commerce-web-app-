import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Products> = [];
  TopSellingProducts: Array<Products> = [];
  errormsg:String='';
  @Input() title: string = 'Products';
  @Input() filter:string='';
  

  constructor(private productservice : ProductsService) { 
    
  }

  ngOnInit(): void {
    this.productservice.getProducts(this.filter).subscribe((res)=>{
  
      this.products=res

    })

    





  }

}
