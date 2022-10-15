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


  getProductsFilterd(cat:String): Observable<Products[]>{

    return this.http.get<Products[]>((this._url+'getproducts/'+cat)).pipe(retry(1),catchError(error => {
      return throwError(error.message);
    }));

  }


  sort(criteria:String , arr:Array<Products>):Array<Products>{
    if(criteria == 'price'){
      arr=arr.sort((n1,n2)=>{
        if(n1.price>n2.price){
          return 1;
        }
        if(n1.price<n2.price){
          return -1;
        }
        return 0;

      })

    }else if(criteria = 'nsale'){

      arr=arr.sort((n1,n2)=>{
        if(n1.nsale<n2.nsale){
          return 1;
        }
        if(n1.nsale>n2.nsale){
          return -1;
        }
        return 0;

      })

    }
    return arr;
  }
}
