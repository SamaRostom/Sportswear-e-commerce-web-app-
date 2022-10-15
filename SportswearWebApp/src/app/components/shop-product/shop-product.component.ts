import { Component, OnInit,Input } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {

  currentPage: number = 0;
  
  @Input() Categories: Array<String> = [];
  allproductss :Array<Products>=[];

  constructor(private productservice :ProductsService) { }

  ngOnInit(): void {

    this.allproductss=this.productservice.AllProducts;
  }

  getProducts(): Array<Products> {
    console.log(this.productservice.getProductWithFilter(
      this.Categories,
      this.currentPage,
      8
    ))
    return this.productservice.getProductWithFilter(
      this.Categories,
      this.currentPage,
      8
    );
  }

  getPageSize(): number {
    return this.productservice.getProductCountWithFilter(
      this.Categories,
     
    );
  }

  incCurrentPage() {
    this.currentPage++;
  }

  decCurrentPage() {
    this.currentPage--;
  }
  setCurrentPage(i: number) {
    this.currentPage = i;
  }

}
