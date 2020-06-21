import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsTabsComponent } from './posts-tabs/posts-tabs.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PostComponent } from './post/post.component';
import { HighlightService } from './_services/highlight.service';

import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";

@NgModule({
  declarations: [
    AppComponent,
    PostsTabsComponent,
    PostsComponent,
    NavMenuComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      spinner: true,
      color: "#f71cff",
      debounceTime : 1
     }),
    NgProgressHttpModule, 
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
