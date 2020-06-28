import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticateModalComponent } from '../authenticate-modal/authenticate-modal.component';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, private authenticationService : AuthenticationService) {}

  openBottomSheet(): void {
    this._bottomSheet.open(AuthenticateModalComponent);
  }

  ngOnInit(): void {
  }

  get isUser() 
  {
    return this.authenticationService.authorized;
  }

  get User()
  {
    return this.authenticationService.currentUserValue;
  }

  logout()
  {
    this.authenticationService.logout();
  }
  panelOpenState = false;
}
  
