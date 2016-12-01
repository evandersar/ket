import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NewsService } from "../news.service";

import 'rxjs/add/operator/switchMap';
import { Article } from "../article";


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})

export class NewsDetailComponent implements OnInit {

  article: Article;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: NewsService
  ) {}


  ngOnInit() {
    //noinspection TypeScriptUnresolvedVariable
    //let id = +this.route.params._value.id;
    this.route.params
        .switchMap((params: Params) => this.service.getNews()
            .map(articles => {
              return articles.filter(article => article.id === +params['id'])[0];
            }))
        .subscribe(article => this.article = article);
  }

  goBack() {
    setTimeout(()=>{this.router.navigate(['/']);}, 1350)
  }

}
