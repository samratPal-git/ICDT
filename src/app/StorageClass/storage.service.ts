import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  SetgetResponseFormLogin(token, userId) {
    window.localStorage.setItem('token', token)
    window.sessionStorage.setItem('userId',userId)
  }

  getToken() {
    window.localStorage.getItem('token')
  }

  getUserData(){
    window.sessionStorage.getItem('userId')
  }

  removeToken() {
    window.localStorage.clear()
  }
  constructor() { }
}
