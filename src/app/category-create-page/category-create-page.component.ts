import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create-page',
  templateUrl: './category-create-page.component.html',
  styleUrls: ['./category-create-page.component.css']
})
export class CategoryCreatePageComponent implements OnInit {

  constructor(private postService : PostService, private router: Router) { }

  ngOnInit(): void {
  }

  categoryForm = new FormGroup({
    engName: new FormControl('', [Validators.required]),
    rusName: new FormControl('', [Validators.required]),
    logo64Href : new FormControl('', [Validators.required]),
  });

  onSubmit()
  {
    if (!this.categoryForm.invalid) this.postService.createCategory(this.categoryForm.value).subscribe(data => { this.router.navigate(['/posts']) })
  }

}
