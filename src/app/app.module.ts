import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ServicesComponent } from './services/services.component';
import { SliderComponent } from './slider/slider.component';

import { Ng2PageScrollModule } from "ng2-page-scroll";
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from "./news.service";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CategoryPipePipe } from './category-pipe.pipe';

import {Counto} from 'angular2-counto/angular2-counto';
import { OrderByPipe } from './order-by.pipe';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormComponent,
    NavigationComponent,
    ServicesComponent,
    SliderComponent,
    AboutComponent,
    NewsComponent,
    PortfolioComponent,
    StatisticsComponent,
    CategoryPipePipe,
    Counto,
    OrderByPipe,
    NewsDetailComponent,
    AppRoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
