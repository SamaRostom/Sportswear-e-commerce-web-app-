import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient: HttpClient) { }
  id: string = `${localStorage.getItem('id')}`
  getData() {
    return this.httpClient.get(`http://localhost:3000/cart`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }
  removeproduct(id: any) {
    return this.httpClient.get(`http://localhost:3000/cart/remove/${id}`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }
  addproduct(id: any) {
    return this.httpClient.get(`http://localhost:3000/cart/add/${id}`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }
  getPrice() {
    return this.httpClient.get(`http://localhost:3000/cart/price`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }
  getShip() {
    return this.httpClient.get(`http://localhost:3000/cart/ship`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }
  inc(id: any) {
    return this.httpClient.get(`http://localhost:3000/cart/inc/${id}`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }
  dec(id: any) {
    return this.httpClient.get(`http://localhost:3000/cart/dec/${id}`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }

  checkout(){
    return  this.httpClient.post(`http://localhost:3000/order`,
    {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    });
  }

}
