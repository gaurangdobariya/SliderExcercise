import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  sampleForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.sampleForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%?&])[A-Za-z0-9@$!%*?&]{8,}$")]],
      confPassword: ['', [Validators.required]],
      mobileNo: ['', [Validators.required, Validators.pattern("[0-9]{10}")]]
    }, { validator: this.CrossFeildValidator });
  }

  CrossFeildValidator: ValidatorFn = (fg: FormGroup) => {

    var pass = fg.controls['password'].value;
    var confPass = fg.controls['confPassword'].value;
    return pass !== null && confPass !== null && pass === confPass
      ? null
      : { password: "mismatch" };
  };
  get confPassword() {
    console.log(this.sampleForm);

    return this.sampleForm.get('confPassword')
  }
  get name() {
    return this.sampleForm.get('name');
  }
  get email() {
    return this.sampleForm.get('email');
  }
  get password() {
    return this.sampleForm.get('password');
  }
  get mobileNo() {
    return this.sampleForm.get('mobileNo');
  }
  onSubmit() {
    console.log(this.name.value);
    console.log(this.email.value);
    console.log(this.password.value);
    console.log(this.mobileNo.value);
  }
}
