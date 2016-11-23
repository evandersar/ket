import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Article } from './article'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsService {

  private newsUrl = 'data.json';  // URL to web API

  constructor (private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getNews (): Promise<Article[]> {
    return this.http.get(this.newsUrl) // http.get returns an RxJS Observable
        .toPromise() // Observable -> Promise
        .then(response => response.json().data as Article[])
        .catch(this.handleError);
  }

}