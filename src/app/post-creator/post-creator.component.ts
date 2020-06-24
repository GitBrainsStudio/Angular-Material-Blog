import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../_services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.css']
})
export class PostCreatorComponent implements OnInit {

  constructor(private postService : PostService, private route:Router) { }

  ngOnInit(): void {
    this.postService.categories().subscribe((data:any) => this.categories = data);
  }

  publishForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    preview: new FormControl('', [Validators.required]),
    content : new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  onSubmit()
  {
    if (!this.publishForm.invalid)
    this.postService.create(this.publishForm.value).subscribe(data => this.route.navigate(['/posts']))
  }

  categories:any[] = [];
}
