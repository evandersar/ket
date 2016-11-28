import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  host: {'(window:scroll)': 'onScroll($event)'}
})
export class StatisticsComponent implements OnInit {

  isScrolled = false;
  currPos: Number = 0;
  changePos: Number = 0;

  projects: number = 0;
  clicks: number = 0;
  mails: number = 0;
  jokes: number = 0;

  constructor(private _el: ElementRef) { }

  ngOnInit() {
  }

  onScroll(evt){
    //console.log(this.isScrolled);

    this.changePos = this._el.nativeElement.offsetTop + 200;
    this.currPos = (window.pageYOffset + document.documentElement.clientHeight); // + document.documentElement.clientHeight

    //console.log('this.currPos', this.currPos);
    //console.log('this.changePos', this.changePos);

    if(this.currPos >= this.changePos && !this.isScrolled ) {

      this.projects = 3054;
      this.clicks = 7234873;
      this.mails = 4670;
      this.jokes = 939;

      this.isScrolled = true;

      //alert(this.isScrolled);
    }

  }

  getPos(e){
    console.log(e);
  }

}
