import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticateModalComponent } from '../authenticate-modal/authenticate-modal.component';
import { PostCreatorModalComponent } from '../post-creator-modal/post-creator-modal.component';
import { CategoryManagerModalComponent } from '../category-manager-modal/category-manager-modal.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  @Input() title : string;

  
  get isUser()
  {
    return this.authenticationService.authorized;
  }

  get userName()
  {
    return this.authenticationService.currentUserValue.userName;
  }

  logout()
  {
    this.authenticationService.logout();
  }

  openAuthentication()
  {
    const dialogRef = this.dialog.open(AuthenticateModalComponent, 
       {
        width: '300px',
        autoFocus: false
       });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openPostCreator()
  {
    const dialogRef = this.dialog.open(PostCreatorModalComponent, 
      {
        autoFocus: false
      });

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
  }

  openCategoryManager()
  {
    const dialogRef = this.dialog.open(CategoryManagerModalComponent, 
      {
        width: '500px',
        autoFocus: false
      });

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
  }

}
