import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [UsersComponent, AddUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ]
})
export class UserModule { }
