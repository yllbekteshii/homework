import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
private apiUrl = environment.apiUrl;
errorMessage:string | undefined;
hasLoginError:boolean=false
constructor(private _httpClient:HttpClient) { }

//Login Function
Login(data:string){
return this._httpClient.post(this.apiUrl +'oauth/token/',data ).subscribe((res:any)=>{
    localStorage.setItem('token',res.token);
    
},
err=>{
    this.errorMessage = err;
    this.hasLoginError = true;
})
}

//SignUp Function
Signup(data:string){
    return this._httpClient.post(this.apiUrl+'api/user/store',data).subscribe((res:any)=>{
        console.log(res)
    },
    err=>{
        console.log(err)
    })
}
}
