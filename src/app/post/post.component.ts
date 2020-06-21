import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private activetedRouter : ActivatedRoute, private postService : PostService) { }

  ngOnInit(): void {
    this.downloadPostDetails(this.activetedRouter.snapshot.params['id']);
  }

  downloadPostDetails(id:string)
  {
    this.postService.details(id).subscribe(data => { this.post = data; console.log(data)})
  }

  post: any;

}
