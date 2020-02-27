import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  basicInfoForm: FormGroup;
  driverDetailsForm: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeBasicInformationForm();
    this.initializeDriverDetailsForm();
  }

  initializeBasicInformationForm(){
    this.basicInfoForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      profilePicture: ['']
    })
  }

  initializeDriverDetailsForm(){
    this.driverDetailsForm = this.formbuilder.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      crFile: [''],
      crNumber: ['', [Validators.required]],
      locationLatitude: [''],
      locationLongitude: [''],
      nicFile: [''],
      nicNumber: ['', [Validators.required]]
    })
  }

  finishFunction(){

  }

}
