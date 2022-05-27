import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FindAccountService } from '../_helpers/find-account.service';

@Component({
  selector: 'app-find-account',
  templateUrl: './find-account.component.html',
  styleUrls: ['./find-account.component.css']
})
export class FindAccountComponent implements OnInit {
@ViewChild('findAccountNgForm') findAccountNgForm!:NgForm;
  constructor(
    private _formBuilder:FormBuilder,
    private _findAcc:FindAccountService
    ) { }

  findAccountForm!:FormGroup

  ngOnInit() {
    this.findAccountForm= this._formBuilder.group({
      email : ['',[Validators.required,Validators.email]],
    });
  }

  //send the email to service function
  sendEmail(){
  return  this._findAcc.sendEmailResset(this.findAccountForm.value)
  }
}
