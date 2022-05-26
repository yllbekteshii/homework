import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import { environment } from 'environments/environment';
@Injectable()
export class AuthService {

public _authenticated: boolean = false;
private readonly JWT_TOKEN = 'token';


private apiUrl = environment.apiUrl;
errorMessage:string | undefined;
hasLoginError:boolean=false

constructor(private _httpClient:HttpClient) { }

//Login Function
login(data:any):Observable <any>{
    return this._httpClient.post(this.apiUrl +'oauth/token',data).pipe(
        switchMap((response: any) => {
           //Save token in localstroage
           this._authenticated = true
           localStorage.setItem('token',response.access_token)
           return response
    
        })
    );

}



//SignUp Function
signup(data:string){
    return this._httpClient.post(this.apiUrl+'api/user/store',data)
}
getJwtToken(){
    return localStorage.getItem(this.JWT_TOKEN + '')
    }
}
