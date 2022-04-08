import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  heading = "Please Enter the data below all feilds are mandatory."
  constructor() { }

  ngOnInit(): void {
  }

}
