import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsTabsComponent } from './posts-tabs/posts-tabs.component';
import { PostsComponent } from './posts/posts.component';
import { PostCreatorComponent } from './post-creator/post-creator.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';


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
        component: PostCreatorComponent
      },
      {
        path: 'edit/:id',
        component: PostCreatorComponent
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
    path: '**', redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
