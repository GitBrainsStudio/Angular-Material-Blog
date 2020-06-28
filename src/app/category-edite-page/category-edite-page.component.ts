import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../_services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-edite-page',
  templateUrl: './category-edite-page.component.html',
  styleUrls: ['./category-edite-page.component.css']
})
export class CategoryEditePageComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private postService : PostService, private router:Router) { }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params['id'];
    this.categoryDetails();
  }
  
  categoryDetails()
  {
    this.postService.categoryFind(this.categoryId).subscribe(data => this.category = data);
  }

  categoryForm = new FormGroup({
    engName: new FormControl('', [Validators.required]),
    rusName: new FormControl('', [Validators.required]),
    logo64Href : new FormControl('', [Validators.required]),
  });

  onSubmit()
  {
    if (!this.categoryForm.invalid) 
    this.postService.updateCategory(this.category).subscribe(data => { this.router.navigate(['/posts']) })
  }
  
  categoryId:any;
  category:any;

}
