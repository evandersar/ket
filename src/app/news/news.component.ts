import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  articles;
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
    //console.log(this.articles);
  }

  getNews(): void {
    //noinspection TypeScriptValidateTypes
    this.articles = this.newsService.getNews();
    //console.log(this.articles);
  }

}
