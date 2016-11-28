import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class NewsService {

  constructor (private http: Http) {}

  getNews (){
    return this.http.request('./data.json')
        .map(res => res.json());
  }

}