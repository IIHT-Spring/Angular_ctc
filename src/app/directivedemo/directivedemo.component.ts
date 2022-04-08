import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {
  courses = [];
  constructor() { }

  ngOnInit(): void {
  }

}
