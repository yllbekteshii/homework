import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FindAccountService } from '../_helpers/find-account.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
@ViewChild('resetPasswordNgForm') resetPasswordNgForm!:NgForm;
resetPasswordForm!:FormGroup;
passwordDoNotMatch = false;

  constructor(
    private _formBuilder:FormBuilder,
    private _router:Router,
    private _findAcc:FindAccountService
  ) { }

  ngOnInit() {
    let token ='';

    this.resetPasswordForm = this._formBuilder.group({
      token         : [token, Validators.required],
      email  : ['admin@gmail.com', [Validators.required, Validators.email]],
      password  : ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation  : ['', Validators.required],
    });
  }


    //Reset password
  resetPassword(){
    console.log(this.resetPasswordForm.value);
    this._findAcc.resetPassword(this.resetPasswordForm.value).subscribe((res:any)=>{
      this._router.navigate(['/sign-in'])
    })
 
  }

}
