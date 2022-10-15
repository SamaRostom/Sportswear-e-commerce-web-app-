import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories:Array<String>=[];

  constructor(private productservice : ProductsService) { }

  ngOnInit(): void {
    this.productservice.getProducts("all").subscribe((res)=>{
  
      this.productservice.AllProducts=res

    })
  }

  changeCategory(categories: Array<String>) {
    this.categories = categories;
  }

}
