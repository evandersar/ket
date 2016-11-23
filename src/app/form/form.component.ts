import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      name: fb.control('', Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z ]+$/)])),
      mail: fb.control('', Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z0-9_@.]+$/)])),
      message: fb.control('', Validators.compose([Validators.required, Validators.minLength(10)]))
    });
  }

  ngOnInit() {
  }

  makeCookie(){
    console.log(this.userForm.value);
  }

}
