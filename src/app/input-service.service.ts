import { Injectable } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import '../assets/dummy.json';
import { Observable } from 'rxjs';
import {User} from './User';


@Injectable({
  providedIn: 'root'
})
export class InputServiceService {

  constructor(private route:Router, private _http:HttpClient) { }

   private _url:string="http://localhost:3000/posts";
  getUserData():Observable<User[]>
  {
     return this._http.get<User[]>(this._url);
  }
}
