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
  users=[];
  isOpen = false;
  subjects : any[] = [];
  deleteRow(user, index) {
    const observable = this.userService.deleteUser(user);
    observable.subscribe((response: any) => {
      console.log(response);
      this.users.splice(index,1)
      
    })
  }
  user = {
    firstname: '',
    lastname: '',
    age: 0,
    gender: 'Male',
    dob:'',
    subject: ""
  };
  save() {
    // console.log(this.user.firstname);
    const observable = this.userService.createUser(this.user);
    observable.subscribe((response: any) => {
      console.log(response);
      this.users.push(response);
    },
    function(error) {
      alert("something went wrong")
    } 
    );
  }

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    console.log('init');
    const observable = this.userService.getSubjects();
    observable.subscribe((response: any) => {
      console.log(response);
      this.subjects = response
      
    })
    
  }
}
