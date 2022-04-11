import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = "http://localhost:3000/users"
  deleteUser(user: any) {
    return this.http.delete(this.BASE_URL + user.id)
  }
  createUser(user: {firstname: String; lastname: String; age: number; gender: String}) {
    return this.http.post(this.BASE_URL,user)
  }
  constructor(public http: HttpClient) {  }
}
