import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  orderBasicInfo: FormGroup;
  multiple = false;

  constructor(private formbuilder: FormBuilder, private orderService: OrderService) { }

  ngOnInit(): void {
    this.generateOrderID();
  }

  generateOrderID(){
    var shipperId = localStorage.getItem('_id');
    var orderId = '';
    this.orderService.getOrderId(shipperId).subscribe(res=>{
      orderId = res.data;
      this.initializeBasicInformationForm(shipperId, orderId);
    })
  }

  initializeBasicInformationForm(shipperId: string, orderId: string){
    this.orderBasicInfo = this.formbuilder.group({
      orderId: [orderId, [Validators.required]],
      pickupType: ['', [Validators.required]],
      shipmentType: ['', [Validators.required]],
      shipperId: [shipperId, [Validators.required]]
    })
  }

  shipmentTypeSelected(): void {
    this.multiple = true;
  }

  finishFunction(){

  }

}
