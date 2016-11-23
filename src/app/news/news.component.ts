import { Component, OnInit } from '@angular/core';
import { Article } from "../article";
import { NewsService } from "../news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  articles: Article[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
    console.log(this.articles);
  }

  getNews(): void {
    this.newsService.getNews().then(articles => this.articles = articles);
  }

}
