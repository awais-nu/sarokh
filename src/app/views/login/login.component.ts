import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private storage:LocalStorageService
    ){}

  ngOnInit(){
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get f() { return this.loginForm.controls; }

  login(){
    if(this.loginForm.controls['username'].value === 'admin'){
      this.storage.store('role', 'admin');
    }else if(this.loginForm.controls['username'].value === 'shipper'){
      this.storage.store('role', 'shipper');
    }
    this.router.navigate(['dashboard']);
  }
 }
