import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-manager-page',
  templateUrl: './category-manager-page.component.html',
  styleUrls: ['./category-manager-page.component.css']
})
export class CategoryManagerPageComponent implements OnInit {

  constructor(private postService : PostService, public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  categories:any[];

  getCategories()
  {
    this.postService.categories().subscribe((data:any[]) => this.categories = data)
  }

  delete()
  {
    this.postService.deleteCategory(this.category.id).subscribe((data:any[]) =>  this.getCategories() );
  }

  select(c:any)
  {
    this.category = c;
  }

  editeRoute()
  {
    this.router.navigate(['/categories/edite/' + this.category.id])
  }

  category:any;



}
