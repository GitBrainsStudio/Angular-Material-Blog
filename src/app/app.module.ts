import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsTabsComponent } from './posts-tabs/posts-tabs.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PostComponent } from './post/post.component';
import { HighlightService } from './_services/highlight.service';

import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";
import { PostCreatorComponent } from './post-creator/post-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HttpConfigInterceptor } from './_handlers/http.interceptor';
import { CategoriesChipsComponent } from './categories-chips/categories-chips.component';
import { AuthenticateModalComponent } from './authenticate-modal/authenticate-modal.component';
import { PostCreatorModalComponent } from './post-creator-modal/post-creator-modal.component';
import { CategoryManagerModalComponent } from './category-manager-modal/category-manager-modal.component';
import { CategoryCreatorModalComponent } from './category-creator-modal/category-creator-modal.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AuthenticatePageComponent } from './authenticate-page/authenticate-page.component';
import { NewPostPageComponent } from './new-post-page/new-post-page.component';
import { CategoryManagerPageComponent } from './category-manager-page/category-manager-page.component';
import { CategoryCreatePageComponent } from './category-create-page/category-create-page.component';
import { PostEditorPageComponent } from './post-editor-page/post-editor-page.component';
import { CategoryEditePageComponent } from './category-edite-page/category-edite-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsTabsComponent,
    PostsComponent,
    NavMenuComponent,
    PostComponent,
    PostCreatorComponent,
    AuthenticateComponent,
    CategoriesChipsComponent,
    AuthenticateModalComponent,
    PostCreatorModalComponent,
    CategoryManagerModalComponent,
    CategoryCreatorModalComponent,
    AccountInfoComponent,
    AuthenticatePageComponent,
    NewPostPageComponent,
    CategoryManagerPageComponent,
    CategoryCreatePageComponent,
    PostEditorPageComponent,
    CategoryEditePageComponent
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

    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [HighlightService, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
