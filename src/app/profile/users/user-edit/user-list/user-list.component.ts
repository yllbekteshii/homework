import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user.model';
import { AuthService } from 'app/_helpers/auth.service';
import { environment } from 'environments/environment.prod';
import { UserService } from '../../_helpers/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  apiUrl = environment.apiUrl
  usersData=this._userService.users$;


  constructor(private _userService:UserService,private _auth:AuthService,private _http:HttpClient,private _route:Router) { }

  ngOnInit() {
     this._userService.getUsers().subscribe();
     console.log(this.usersData);
  }

  deleteUser(id:number){
    console.log(id)
    this._userService.deleteUser(id).subscribe(res=>{
      console.log(res)
    })
  }

    //Destroy token and log out
    logOut(){
      return this._http.post(this.apiUrl+'user/logout',localStorage.getItem('token')).subscribe(res=>{
        this._auth.signOut();
        this._route.navigate(['/log-in'])
      },err=>{
        this._auth.signOut();
        this._route.navigate(['/log-in'])
      })
    }
}
