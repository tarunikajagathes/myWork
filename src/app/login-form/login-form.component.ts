import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CanComponentLeave } from '../unsavedchanges.guard';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements CanComponentLeave{
  loginForm= new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required])
  })
  canLeave(): boolean{
    if(this.loginForm.dirty){
      return window.confirm("Are you sure you want to navigate?");
    }
    return true;
  }
  submit(){
    alert("From submitted!!");
  }  
  
}
