import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  userName: FormControl;
  userMail: FormControl;
  userMessage: FormControl;
  userForm: FormGroup;
  submitted: boolean = false;

  constructor(fb: FormBuilder) {

    this.userName = fb.control(Cookie.get('nameCookie'), Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z ]+$/)]));
    this.userMail = fb.control(Cookie.get('mailCookie'), Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z0-9_@.]+$/)]));
    this.userMessage = fb.control('', Validators.compose([Validators.required, Validators.minLength(10)]));

    this.userForm = fb.group({
      name: this.userName,
      mail: this.userMail,
      message: this.userMessage
    });

  }

  ngOnInit() {
  }

  onSubmit(){

    this.makeCookie();
    this.reset();

    this.submitted = true;
    setTimeout(()=>{this.submitted = false}, 2000);

  }

  makeCookie(){

    Cookie.set('nameCookie', this.userForm.value.name, 5);
    Cookie.set('mailCookie', this.userForm.value.mail, 5);

    //console.log(Cookie.getAll());
    //console.log(this.userForm.value);
  }

  reset() {
    this.userName.setValue('');
    this.userMail.setValue('');
    this.userMessage.setValue('');
  }

}
