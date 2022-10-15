import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories:Array<String>=[];
  shopProducts:Array<Products>=[];

  constructor(private productservice : ProductsService) { }


  ngOnInit(): void {

    this.productservice.getProducts("all").subscribe((res)=>{
      this.shopProducts=res
    });

  }

    getproductsFiltered(value :String){
      if (value == 'All'){
        console.log("HI")
        this.productservice.getProducts("all").subscribe((res)=>{
          this.shopProducts=res
        });
      }else{
        console.log("Bye")

        this.productservice.getProductsFilterd(value).subscribe((res)=>{
            this.shopProducts=res;
        });

      }
  }


  getproducts():Array<Products>{
    return this.shopProducts
  }

  sort(criteria:String){
    this.shopProducts=this.productservice.sort(criteria,this.shopProducts)
  }

}
