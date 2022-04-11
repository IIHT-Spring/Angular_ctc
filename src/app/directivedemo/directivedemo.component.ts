import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {
  courses = [];
  presentDate = new Date()
  demotext= "this is demo string"
  price= 1000;
  num1 = 12.223343;
  num2 = 1.2312;
  score = 0.50;
  object = {
    id : 1, name: 
    {
      firstname: "Nishant",
      lastname: "Gupta"
    }
  }
  constructor() { }
 
  ngOnInit(): void {
  }

}
