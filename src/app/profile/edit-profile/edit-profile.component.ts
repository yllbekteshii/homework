import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/_helpers/auth.service';
import { environment } from 'environments/environment';
import { UserUpdateService } from './_helpers/user-update.service';



interface User {
  id:number,
  name:string,
  email:string,
  phone:string,
  birthday:string,
  gender:string,
  addres:string,
  }

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @ViewChild('updateNgForm') newUpdateNgForm!: NgForm;

  apiUrl= environment.apiUrl;
  userInfo!:User;  
  updateForm!:FormGroup;
  updated:boolean=false;

    constructor( 
      private _formBuilder:FormBuilder,
      private _userUpdate:UserUpdateService,
      private _http:HttpClient,
      private _auth:AuthService,
      private _route:Router,

      ) { }

  ngOnInit() {
    
    this.updateForm = this._formBuilder.group({
      name: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      phone:['',Validators.required],
      birthday:['',Validators.required],
      gender:['',Validators.required],
      addres:['',Validators.required]
    })  

    //Call user data from service
    this._userUpdate.getUser().subscribe((res:any)=>{
      this.userInfo = res
      
      this.updateForm.setValue({
        name : this.userInfo.name,
        email : this.userInfo.email,
        password: '',
        phone: this.userInfo.phone,
        birthday:this.userInfo.birthday,
        gender:this.userInfo.gender,
        addres: this.userInfo.addres
      })
    })
  }

  //Update user
  updateUser(){
    this.updated = true;
  return  this._userUpdate.updateData(this.updateForm.value);
  }
  
  logOut(){
    return this._http.post(this.apiUrl+'api/user/logout',localStorage.getItem('token')).subscribe(res=>{
      this._auth.signOut();
      this._route.navigate(['/log-in'])
    },err=>{
      this._auth.signOut();
      this._route.navigate(['/log-in'])
    })
  }
}
