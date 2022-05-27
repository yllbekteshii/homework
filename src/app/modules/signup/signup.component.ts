import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/_helpers/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('registerNgForm') signUpNgForm!: NgForm;

  signUpForm!: FormGroup;
  constructor(
    private _authService:AuthService,
    private _formBuilder:FormBuilder,
    private _router:Router
  ) { }

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      name: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      phone:['',Validators.required],
      birthday:['',Validators.required],
      gender:['',Validators.required],
      addres:['',Validators.required]
    })  
  }

  signUp():void
  {
        // Do nothing if the form is invalid
    if ( this.signUpForm.invalid )
    {
        return;
    }
    this.signUpForm.disable();

    this._authService.signup(this.signUpForm.value).subscribe(
      (response)=>{
        this._router.navigate(['/log-in'])
        this.signUpForm.enable()
        console.log(response)
      }
    ) 
  }
}
