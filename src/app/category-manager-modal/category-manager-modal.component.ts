import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryCreatorModalComponent } from '../category-creator-modal/category-creator-modal.component';

@Component({
  selector: 'app-category-manager-modal',
  templateUrl: './category-manager-modal.component.html',
  styleUrls: ['./category-manager-modal.component.css']
})
export class CategoryManagerModalComponent implements OnInit {

  constructor(private postService : PostService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCategories();
  }

  categories:any[];

  getCategories()
  {
    this.postService.categories().subscribe((data:any[]) => this.categories = data)
  }

  openCategoryCreator()
  {
    const dialogRef = this.dialog.open(CategoryCreatorModalComponent, 
      {
        width: '500px',
        autoFocus: false
      });

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
     this.getCategories()
   });
  }

  delete(id:string)
  {
    this.postService.deleteCategory(id).subscribe((data:any[]) =>  this.getCategories() );
  }

  
}
