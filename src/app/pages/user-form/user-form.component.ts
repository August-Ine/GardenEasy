import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  isLogin = false;

  activeForm: FormGroup = new FormGroup({});

  signinForm: FormGroup = this.fb.group({
    Username: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.email, Validators.required]),
    Address: new FormControl('', [Validators.required]),
    Password: new FormControl('', [
      Validators.minLength(7),
      Validators.required,
    ]),
  });

  loginForm: FormGroup = this.fb.group({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      let endpoint = url[0].path;
      // this.activeForm = endpoint === 'sign-in' ? this.loginForm : this.userForm;
      this.isLogin = endpoint === 'sign-in' ? true : false;
      this.activeForm = this.isLogin ? this.loginForm : this.signinForm;
    });
  }

  toggleForm() {
    const otherRoute = this.isLogin ? 'sign-up' : 'sign-in';
    this.router.navigate([`/${otherRoute}`]);
  }

  onSubmit() {
    console.log(this.signinForm.controls);
  }
}
