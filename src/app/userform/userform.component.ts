import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  heading = 'Please Enter the data below all fields are mandatory.';
  user = {
    firstname: '',
    lastname: '',
    age: 0,
    gender: 'Male',
  };
  save() {
    // console.log(this.user.firstname);
    const observable = this.userService.createUser(this.user);
    observable.subscribe((response: any) => {
      console.log(response);
    },
    function(error) {
      alert("something went wrong")
    } 
    );
  }

  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
