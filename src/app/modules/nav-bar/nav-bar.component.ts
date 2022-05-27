import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/_helpers/auth.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

apiUrl = environment.apiUrl;

  constructor(
    private _http:HttpClient,
    private _auth:AuthService,
    private _route:Router,
    
    ) { }
  logOut(){
    return this._http.post(this.apiUrl+'api/user/logout',localStorage.getItem('token')).subscribe(res=>{
      this._auth.signOut();
      this._route.navigate(['/log-in'])
    },err=>{
      this._auth.signOut();
      this._route.navigate(['/log-in'])
    })
  }
  ngOnInit(): void {
  }

}
