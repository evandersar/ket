import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  team = [
    { source: "images/john1.png", clas: "col-sm-2 col-sm-offset-2 col-xs-4 col-xs-offset-2"},
    { source: "images/john2.png", clas: "col-sm-2 col-sm-offset-0 col-xs-4"},
    { source: "images/john3.png", clas: "col-sm-2 col-sm-offset-0 col-xs-4 col-xs-offset-2"},
    { source: "images/john4.png", clas: "col-sm-2 col-sm-offset-0 col-xs-4"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
