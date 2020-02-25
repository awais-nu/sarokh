import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from 'angular-archwizard';

import { DriverRoutingModule } from './driver-routing.module';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { DriversComponent } from './drivers/drivers.component';


@NgModule({
  declarations: [AddDriverComponent, DriversComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    ArchwizardModule
  ]
})
export class DriverModule { }
