import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../_services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-editor-page',
  templateUrl: './post-editor-page.component.html',
  styleUrls: ['./post-editor-page.component.css']
})
export class PostEditorPageComponent implements OnInit {

  constructor(private activetedRouter:ActivatedRoute, private postService : PostService, private router:Router) { }

  ngOnInit(): void {
    this.postService.categories().subscribe((data:any[]) => this.categories = data);
    this.postId = this.activetedRouter.snapshot.params['id'];
    this.postDetails();
  }

  categories:any[];
  post:any;
  postId:any;

  postDetails()
  {
    this.postService.details(this.postId).subscribe(data => { this.post = data; console.log(this.post)} );
  }

  publishForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    preview: new FormControl('', [Validators.required]),
    content : new FormControl('', [Validators.required]),
    /* category: new FormControl('', [Validators.required]), */
  });

  onSubmit()
  {
    if (this.publishForm.invalid) return;
    this.publishForm.addControl('id', new FormControl(this.post.id , []));
    this.postService.update(this.publishForm.value).subscribe(data => this.router.navigate(['/posts']))
  }


}
