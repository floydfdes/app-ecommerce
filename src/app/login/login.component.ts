import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  validCred: any = {
    email: 'floyd@gmail.com',
    password: 'floyd123',
  };
  constructor(private fB: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    console.log(this.loginForm);
    if (
      this.loginForm.get('email').value == this.validCred.email &&
      this.loginForm.get('password').value == this.validCred.password
    ) {
      localStorage.setItem('user', this.loginForm.get('email').value);
    } else {
      localStorage.setItem('user', '');
    }
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
