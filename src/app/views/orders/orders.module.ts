import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { PickupOrdersComponent } from './pickup-orders/pickup-orders.component';
import { DeliveryOrdersComponent } from './delivery-orders/delivery-orders.component';
import { NoResponseOrdersComponent } from './no-response-orders/no-response-orders.component';
import { BulkOrderUpdateComponent } from './bulk-order-update/bulk-order-update.component';
import { CodReportsComponent } from './cod-reports/cod-reports.component';
import { ViewOrderComponent } from './view-order/view-order.component';


@NgModule({
  declarations: [AllOrdersComponent, PickupOrdersComponent, DeliveryOrdersComponent, NoResponseOrdersComponent, BulkOrderUpdateComponent, CodReportsComponent, ViewOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
