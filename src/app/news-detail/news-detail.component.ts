import { Component, OnInit, HostBinding,
  trigger, transition, animate,
  style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NewsService } from "../news.service";

import 'rxjs/add/operator/switchMap';
import { Article } from "../article";


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  animations: [
    trigger('routeAnimation', [
      state('*',
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }))
      ])
    ])
  ]
})

export class NewsDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'block';
  }

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
    /*this.router.navigate(['/']);*/
    setTimeout(()=>{this.router.navigate(['/']);}, 1350)
  }

}
