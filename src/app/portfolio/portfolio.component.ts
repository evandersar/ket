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
  /*isHidden: boolean = true;
  hid: string = 'hidden';*/

  catChanger(cat){
    this.category = cat;
    //console.log(this.images);
  }

  show(e){
    /*this.isHidden = false;
    this.hid ='visible';*/
    e.target.previousElementSibling.style.visibility = 'visible';
  }

  hide(e){
    /*this.isHidden = true;
    this.hid ='hidden';*/
    e.target.style.visibility = 'hidden';
  }
  constructor() { }

  ngOnInit() {
  }

}
