import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { StorageService } from 'src/app/StorageClass/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginResponse
  constructor(private authService: AuthenticationService, private router: Router, private store: StorageService) { }

  ngOnInit(): void {
  }
loginForm(formValue:any){
  const formValueget = formValue.value;
  console.log(formValue.value)
  this.authService.postSignin(formValueget).subscribe((respose) => {
    console.log(respose);
    this.loginResponse = respose
      this.store.SetgetResponseFormLogin(this.loginResponse.token, this.loginResponse.result._id)
    this.router.navigate(['/home'])

  });
}
}
