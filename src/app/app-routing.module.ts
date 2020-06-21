import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsTabsComponent } from './posts-tabs/posts-tabs.component';
import { PostsComponent } from './posts/posts.component';
import { PostCreatorComponent } from './post-creator/post-creator.component';


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
        path: ':id',
        component: PostComponent
      }
    ]

  },

  {
    path: '**', redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
