import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient: HttpClient) { }
  id: string = `${localStorage.getItem('id')}`
  getData() {
    return this.httpClient.get(`http://localhost:3000/cart/${this.id}`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }

  getPrice() {
    return this.httpClient.post(`http://localhost:3000/price/${this.id}`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }
  getShip() {
    return this.httpClient.post(`http://localhost:3000/ship/${this.id}`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }
  gettotal() {
    return this.httpClient.post(`http://localhost:3000/totalprice/${this.id}`,
      {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      });
  }
}
