import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { Observable ,throwError } from 'rxjs';
import {HttpClient ,HttpErrorResponse} from '@angular/common/http';
import {catchError , map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly _url="http://localhost:3000/";
  AllProducts : Array<Products> = [];

  constructor(private http :HttpClient) { }

  
  getProducts(type:String) : Observable<Products[]>{

    if(type=='new'){
      return this.http.get<Products[]>((this._url+'new')).pipe(retry(1),catchError(error => {
        return throwError(error.message);
      }));
      
    }else if(type=='topsell'){

      return this.http.get<Products[]>((this._url+'topselling')).pipe(retry(1),catchError(error => {
        return throwError(error.message);
      }));

    }else if(type=='onsale'){

      return this.http.get<Products[]>((this._url+'onsale')).pipe(retry(1),catchError(error => {
        return throwError(error.message);
      }));

    }else{

      return this.http.get<Products[]>((this._url+'product')).pipe(retry(1),catchError(error => {
        return throwError(error.message);
      }));


    } 

  }


  getProductCountWithFilter(categories: Array<String>): number {
    this.getProducts("all").subscribe((res)=>{
      this.AllProducts=res
    })
    return (
      this.AllProducts.filter((p) => {
        return (
          this.isCategorySelected(p.category, categories)
        );
      }).length / 8
    );
  }

  getProductWithFilter(categories: Array<String>,currentPage: number,pageSize: number): Array<Products> {
    this.getProducts("all").subscribe((res)=>{
      this.AllProducts=res
    })
    return this.AllProducts
      .filter((p) => {
        return (
          this.isCategorySelected(p.category, categories) 
        );
      })
      .slice(currentPage * pageSize, currentPage * pageSize + pageSize);
  }


  isCategorySelected(category: String, categories: Array<String>): boolean{
    for (let i = 0; i < categories.length; i++) {
        if (categories[i] == ""){ 
          return true;
        }
        else{
          return categories.includes(category);
        }
    }
    return false;
  }

}
