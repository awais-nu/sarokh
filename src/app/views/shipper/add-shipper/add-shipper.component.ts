import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.component.html',
  styleUrls: ['./add-shipper.component.css']
})
export class AddShipperComponent implements OnInit {

  basicInfoForm: FormGroup;
  businessDetailsForm: FormGroup;

  constructor( private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeBasicInformationForm();
    this.initializeBusinessDetailsForm();
  }

  initializeBasicInformationForm(){
    this.basicInfoForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      profilePicture: ['']
    })
  }
  initializeBusinessDetailsForm(){
    this.businessDetailsForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      profilePicture: ['']
    })
  }



  finishFunction(){

  }

  submit(){

  }

}
