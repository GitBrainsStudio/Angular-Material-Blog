import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-chips',
  templateUrl: './categories-chips.component.html',
  styleUrls: ['./categories-chips.component.css']
})
export class CategoriesChipsComponent implements OnInit {

  constructor(private postService : PostService, private router : Router) { }

  ngOnInit(): void {
   this.postService.categories().subscribe((data:any[]) =>
   { 
     data.forEach(v => {
      this.chipsLinks.push(
        {
          label : v.rusName,
          link: '/posts/' + v.engName
        }
      )
     })
   });
  }
  
  chipsLinks:any[] = [
    /* {
      label : 'Все подряд',
      link  : '/posts',
      routerLinkActiveOptions : "{ exact: true }",
    } */
  ];

  get postsActive(): boolean {
    return this.router.url.includes('/posts/new') || this.router.url.includes('/posts/popular');
  } 

}
