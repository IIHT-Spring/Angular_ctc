import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(user: {firstname: String; lastname: String; age: number; gender: String}) {
    return this.http.post('http://localhost:3001/users',user)
  }
  constructor(public http: HttpClient) {  }
}
