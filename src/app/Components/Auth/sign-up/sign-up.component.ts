import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupValue: FormGroup;
  formValue;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    //
    this.signupValue = this.fb.group({
      firstname: ['', [Validators.required, Validators.maxLength(5)]],
      lastname: ['', [Validators.required, , Validators.maxLength(5)]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          ),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
    });
  }
  ngOnInit(): void {}
  register(): void {
    console.log(this.signupValue.value);
    this.formValue = this.signupValue.value;
    this.authService.postSignup(this.formValue).subscribe((serverresponse) => {
      console.log(serverresponse);
      this.router.navigate(['/login']);
    });
  }
}
