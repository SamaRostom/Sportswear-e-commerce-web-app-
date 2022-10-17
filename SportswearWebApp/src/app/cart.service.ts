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
  qyt(id: any) {
    return this.httpClient.get(`http://localhost:3000/cart/qyt/${id}`,
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

  checkout(checkoutForm:any){
    return  this.httpClient.post(`http://localhost:3000/order`,{
      cardNumber: checkoutForm.value.cardnumber,
      name: checkoutForm.value.name,
      cvv:checkoutForm.value.cvv,
      expire:checkoutForm.value.expire
    },
    {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    });
  }


}
