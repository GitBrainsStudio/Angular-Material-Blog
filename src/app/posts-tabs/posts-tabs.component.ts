import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../_services/post.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-posts-tabs',
  templateUrl: './posts-tabs.component.html',
  styleUrls: ['./posts-tabs.component.css']
})
export class PostsTabsComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router, private activatedRouter : ActivatedRoute, private postService : PostService, private authenticationService : AuthenticationService) {

  this.activatedRouter.paramMap.subscribe((params:any) => {console.log(params)});

    this.navLinks = [
        {
            label: 'Популярные',
            link: 'popular',
            index: 0
        }, 
        
        {
            label: 'Новые',
            link: 'new',
            index: 1
        },

        /* {
          label: 'Добавить статью',
          link: '/posts/create',
          index: 2
        }  */

        /*
        {
          label: 'Управление категорями',
          link: '/posts/create',
          index: 3
        },

        {
          label: 'Управление пользователями',
          link: '/posts/create',
          index: 3
        }, */

    ];
}
ngOnInit(): void {

  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}


}
