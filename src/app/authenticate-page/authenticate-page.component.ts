import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate-page',
  templateUrl: './authenticate-page.component.html',
  styleUrls: ['./authenticate-page.component.css']
})
export class AuthenticatePageComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService, private router:Router) { }

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
    .subscribe(data => { this.router.navigate(['/posts'])});
  }

}
