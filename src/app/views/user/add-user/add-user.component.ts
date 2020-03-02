import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles: any;
  userForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initializeUserForm();
    this.fetchUserRoles();
  }

  initializeUserForm() {
    this.userForm = this.formbuilder.group({
      contact: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      userPassword: ['', [Validators.required]],
    })
  }

  fetchUserRoles():void {
    this.userService.fetchUserRoles().subscribe(res => {
      this.roles = res.data;
    })
  }

}
