import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/models/user.model';
import { UserService } from '../_helpers/user.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  id:number;
  header:string;
  user:User = {
    id:null,
    name:'',
    phone:'',
    email:'',
    password:'',
    birthday:'',
    gender:'',
    addres:'',
  }
  constructor(private _router:Router ,private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit():void {
   this.id = +this.route.snapshot.paramMap.get('id'); 
   //Check if the id is 0
    this.header = this.id === 0? 'Add User':'Edit User';
  
    if(this.id != 0){
      this.userService.getSingleUser(this.id).subscribe(data=>{
        this.user = data
      })
    }

  }
  //New User
  saveUser(id:number,form:any){
    debugger
    //this if checks if user is 0 it redicrets to add page elese it will edit user by Id
    if(this.id === 0){
      this.userService.newUserAdd(form).subscribe()
    }else{
      this.userService.userUpdate(id,form).subscribe()
    }
    this._router.navigate(['/user-list'])
  }
}
