import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn(){
    const person=prompt("Enter the password to visit payments:");
    if(person=="123")
    {
      return true;
    }
    else{
      alert("Password incorret!!");
      return false;
    }
  }
}
