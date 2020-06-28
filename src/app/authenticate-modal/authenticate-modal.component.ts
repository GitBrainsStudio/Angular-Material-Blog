import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-authenticate-modal',
  templateUrl: './authenticate-modal.component.html',
  styleUrls: ['./authenticate-modal.component.css']
})
export class AuthenticateModalComponent implements OnInit {


  constructor(private authenticationService : AuthenticationService, private router : Router, 
    public dialogRef: MatDialogRef<AuthenticateModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    
    private _bottomSheetRef: MatBottomSheetRef<AuthenticateModalComponent>) { }


   

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
  ngOnInit(): void {
    this.initForm();
  }

  loginForm: FormGroup;

  initForm()
  {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit()
  {
    if (this.loginForm.invalid) return;
    this.authenticationService.login(this.loginForm.value)
    .subscribe(data => this.close());
  }

  close(): void {
    this.dialogRef.close();
  }

}
