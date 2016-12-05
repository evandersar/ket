import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";
import { Article } from "../article";
import { Router } from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  articles;
  limit: number = 5;
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(
      private router: Router,
      private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.getNews();
    //console.log(this.articles);
  }

  getNews(): void {
    //noinspection TypeScriptValidateTypes
    this.articles = this.newsService.getNews();
    //console.log(this.articles);
  }

  onSelect(article: Article) {
    this.router.navigate(['/news', article.id]);
  }

}
