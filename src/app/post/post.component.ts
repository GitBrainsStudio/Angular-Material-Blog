import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../_services/post.service';
import { HighlightService } from '../_services/highlight.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private activetedRouter : ActivatedRoute, private postService : PostService, private highlightService: HighlightService) { }

  ngOnInit(): void {
    this.ngAfterViewChecked();
    this.downloadPostDetails(this.activetedRouter.snapshot.params['id']);
  }

  downloadPostDetails(id:string)
  {
    this.postService.details(id).subscribe(data => { this.post = data; this.title = this.post.title; })
  }

  post: any;
  highlighted: boolean = false;

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
    this.highlighted = true;
  }

  title: string;
}
