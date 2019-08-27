import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/guards/auth.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private fb: FormBuilder,
    private authService : AuthService,
    private route : Router
    ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  login(){
    console.log("Logeed");
    
    if(this.email.value == 'admin@email.com' && this.password.value == 'admin' ){
      console.log("Logged In SucessFully");
      
      this.authService.sendToken(this.email.value);
      this.route.navigate(['dashboard'])
    }
    else{
      console.log("sdgfsfg");
      
      this.route.navigate(['login'])
    }
  }

}
