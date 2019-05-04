import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.authenticate(this.loginForm.value);
    this.router.navigateByUrl('/profile');
  }
}
