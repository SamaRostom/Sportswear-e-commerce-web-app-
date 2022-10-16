import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import {HttpClient ,HttpErrorResponse} from '@angular/common/http';
import {catchError , map, retry} from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly _url="http://localhost:3000/";
  constructor(private http: HttpClient) { }


  getUserData(): Observable<User> {

      return this.http.get<User>((this._url+'getuser'),{
        headers: { Authorization: `${localStorage.getItem('token')}` },
      }
      ).pipe(retry(1),catchError(error => {
        return throwError(error.message);
      }));
  }
}
