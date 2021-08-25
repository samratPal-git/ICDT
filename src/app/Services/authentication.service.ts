import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Components/API/users';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signupAPIUrl = " https://ictproject1.herokuapp.com/postForm"
  signinAPIUrl = "https://ictproject1.herokuapp.com/postLogin"
  postSignup(formData): Observable<Users[]> {
    return this.http.post<Users[]>(this.signupAPIUrl, formData)
  }
  postSignin(formData): Observable<Users[]> {
    return this.http.post<Users[]>(this.signinAPIUrl, formData)
  }


}
