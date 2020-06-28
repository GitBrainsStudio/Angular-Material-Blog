import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsTabsComponent } from './posts-tabs/posts-tabs.component';
import { PostsComponent } from './posts/posts.component';
import { PostCreatorComponent } from './post-creator/post-creator.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AuthenticatePageComponent } from './authenticate-page/authenticate-page.component';
import { NewPostPageComponent } from './new-post-page/new-post-page.component';
import { CategoryManagerPageComponent } from './category-manager-page/category-manager-page.component';
import { CategoryCreatePageComponent } from './category-create-page/category-create-page.component';
import { PostEditorPageComponent } from './post-editor-page/post-editor-page.component';
import { CategoryEditePageComponent } from './category-edite-page/category-edite-page.component';


const routes: Routes = [


  {
    path: 'posts',
    component: PostsTabsComponent,
    children: 
    [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'popular'
      },
      {
        path: 'popular',
        component: PostsComponent
      },
      {
        path: 'new',
        component: PostsComponent
      },

      {
        path: 'create',
        component: PostCreatorComponent
      },
    ]
  },

  
  {
    path: 'posts/:id', component: PostsTabsComponent,
    children:
    [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'popular'
      },
      {
        path: 'popular',
        component: PostsComponent
      },
      {
        path: 'new',
        component: PostsComponent
      },
    ]
  },

  {
    path: 'post',
    children:
    [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/posts/popular'
      },
      {
        path: 'create',
        component: NewPostPageComponent
      },
      {
        path: 'edit/:id',
        component: PostEditorPageComponent
      },
      {
        path: ':id',
        component: PostComponent
      }
    ]

  },

  {
    path: 'authenticate', component: AuthenticateComponent
  },

  {
    path: 'authentication', component : AuthenticatePageComponent
  },

  {
    path: 'account', component : AccountInfoComponent
  },

  {
    path: 'categories', component: CategoryManagerPageComponent,
  },

  {
    path: 'categories/create', component : CategoryCreatePageComponent
  },
  
  {
    path: 'categories/edite/:id', component : CategoryEditePageComponent
  },


  {
    path: '**', redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
