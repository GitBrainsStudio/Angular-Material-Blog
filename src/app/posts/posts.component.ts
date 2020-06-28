import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService, private router : Router, private activatedRouter : ActivatedRoute, private authenticationService : AuthenticationService) { }

  ngOnInit(): void { 
      this.activatedRouter.url.subscribe(url =>{
        this.getPreviews();
      });
  }

  getPreviews()
  {

    console.log(this.router.url);

    if (this.router.url == "/posts/popular") this.postService.previews("popular").subscribe((data:any[]) => { this.posts = data; console.log(this.posts)});
    if (this.router.url == "/posts/new") this.postService.previews("new").subscribe((data:any[]) => this.posts = data);
    
    var split = this.router.url.split('/'); 
    if (split[2] != 'popular' && split[2] != 'new') this.postService.previewsByCategory(split[2], split[3]).subscribe((data:any[]) => { this.posts = data; console.log(this.posts)});
  }

  posts: any[] = [];

  delete()
  {
    this.postService.delete(this.post.id).subscribe(data => this.getPreviews());
  }
  
  selectPost(post:any)
  {
    this.post = post;
  }

  get isAdmin()
  {
    return this.authenticationService.isAdmin;
  }

  post: any;

  editRoute()
  {
    this.router.navigate(['/post/edit/' + this.post.id])
  }
}
