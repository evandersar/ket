import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      name: fb.control(Cookie.get('nameCookie'), Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z ]+$/)])),
      mail: fb.control(Cookie.get('mailCookie'), Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z0-9_@.]+$/)])),
      message: fb.control('', Validators.compose([Validators.required, Validators.minLength(10)]))
    });
  }

  ngOnInit() {
  }

  makeCookie(){

    Cookie.set('nameCookie', this.userForm.value.name, 5);
    Cookie.set('mailCookie', this.userForm.value.mail, 5);

    console.log(Cookie.getAll());

    console.log(this.userForm.value);
  }

}
