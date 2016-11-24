import { Component, OnInit } from '@angular/core';
import images from '../images'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})

export class PortfolioComponent implements OnInit {

  category: string = 'All';
  images = images;

  catChanger(cat){
    this.category = cat;
    //console.log(this.images);
  }

  constructor() { }

  ngOnInit() {
  }

}
