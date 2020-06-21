import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsTabsComponent } from './posts-tabs/posts-tabs.component';
import { PostsComponent } from './posts/posts.component';


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
      }
    ]
  },

  {
    path: 'post/:id',
    component: PostComponent
  },

  {
    path: '**', redirectTo: '/posts/popular'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
