import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/_helpers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('signInNgForm') signInNgForm: NgForm | undefined;
   signInForm!: FormGroup;

  constructor(private _auth:AuthService,
    private _formbuilder:FormBuilder,
    private _route:Router
    ) { }
    
    
    ngOnInit() {
      this.signInForm =  this._formbuilder.group({
        username :['',[Validators.required,Validators.email]],
        password     : ['', [Validators.required, Validators.minLength(8)]],
        grant_type   : ['password'],
        scope        : [''],
        client_id    : ['1'],
        client_secret: ['7iMEPkzK1Le5EtgknzScsmyvyIopWZKZl2DHK8Ks']
      })
    }
    
      /**
     * Sign in
     */
signIn():void
{
if (this.signInForm.invalid)
{
  return 
}
//Disable the form
this.signInForm.disable()

//Sign in
this._auth.login(this.signInForm.value)
.subscribe(
  (res:any)=>{
    console.log(res)
    this._route.navigate(['/products'])
  }
)
}

}
