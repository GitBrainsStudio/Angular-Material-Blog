import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../_services/post.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-category-creator-modal',
  templateUrl: './category-creator-modal.component.html',
  styleUrls: ['./category-creator-modal.component.css']
})
export class CategoryCreatorModalComponent implements OnInit {

  constructor(private postService : PostService, public dialogRef: MatDialogRef<CategoryCreatorModalComponent>,) { }

  ngOnInit(): void {
  }

  
  categoryForm = new FormGroup({
    engName: new FormControl('', [Validators.required]),
    rusName: new FormControl('', [Validators.required]),
    logo64Href : new FormControl('', [Validators.required]),
  });

  onSubmit()
  {
    if (!this.categoryForm.invalid) this.postService.createCategory(this.categoryForm.value).subscribe(data => { this.dialogRef.close(); })

  }
}
