import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { NewsDetailComponent } from "../news-detail/news-detail.component";
import { NewsComponent } from "../news/news.component";

const appRoutes: Routes = [
  { path: 'news/:id', component: NewsDetailComponent },
  { path: '', component: NewsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
