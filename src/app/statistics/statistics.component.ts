import { Component, OnInit, ElementRef } from '@angular/core';
import {Counto} from 'angular2-counto/angular2-counto';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  host: {'(window:scroll)': 'startAnime($event)'},
})
export class StatisticsComponent implements OnInit {

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = this._el.nativeElement.offsetTop;

  projects: number = 0;
  clicks: number = 0;
  mails: number = 0;
  jokes: number = 0;

  constructor(private _el: ElementRef) { }

  ngOnInit() {
  }

  startAnime(evt){
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);

    if(this.currPos >= this.changePos ) {
      this.isScrolled = true;

      this.projects = 3054;
      this.clicks = 7234873;
      this.mails = 4670;
      this.jokes = 939;

      this.anime();

      console.log(this.isScrolled);
    } else {
      this.isScrolled = false;

      this.projects = 0;
      this.clicks = 0;
      this.mails = 0;
      this.jokes = 0;

      console.log(this.isScrolled);
    }
  }

  anime(){
    setTimeout(console.log('Привет'), 1000);
  }

}
