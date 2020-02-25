import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from 'angular-archwizard';

import { DealerRoutingModule } from './dealer-routing.module';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { DealersComponent } from './dealers/dealers.component';


@NgModule({
  declarations: [AddDealerComponent, DealersComponent],
  imports: [
    CommonModule,
    DealerRoutingModule,
    ArchwizardModule
  ]
})
export class DealerModule { }
