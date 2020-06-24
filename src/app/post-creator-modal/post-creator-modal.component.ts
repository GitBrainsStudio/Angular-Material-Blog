import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-creator-modal',
  templateUrl: './post-creator-modal.component.html',
  styleUrls: ['./post-creator-modal.component.css']
})
export class PostCreatorModalComponent implements OnInit {

  constructor(private postService : PostService, private route:Router, public dialogRef: MatDialogRef<PostCreatorModalComponent>) { }

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
    this.postService.create(this.publishForm.value).subscribe(data => { this.dialogRef.close(); this.route.navigate(['/posts'])})
  }

  categories:any[] = [];
}
