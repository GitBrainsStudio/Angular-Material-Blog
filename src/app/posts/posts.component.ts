import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService, private router : Router) { }

  ngOnInit(): void { this.getPreviews();
    
  }

  getPreviews()
  {
    if (this.router.url == "/posts/popular") this.postService.previews("popular").subscribe((data:any[]) => { this.posts = data; console.log(this.posts)});
    if (this.router.url == "/posts/new") this.postService.previews("new").subscribe((data:any[]) => this.posts = data);

    
  }

  posts: any[] = [];

}
