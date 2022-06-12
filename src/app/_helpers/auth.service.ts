import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs';
import { environment } from 'environments/environment.prod';
import { AuthUtils } from './auth.utils';
@Injectable()
export class AuthService {

public _authenticated: boolean = false;
private readonly JWT_TOKEN = 'token';
private apiUrl = environment.apiUrl;
errorMessage:string | undefined;
hasLoginError:boolean=false


constructor(private _httpClient:HttpClient) { }


get accessToken(): string
    {
        return localStorage.getItem(this.JWT_TOKEN) ?? '';
    }
set accessToken(token: string)
{

    localStorage.setItem(this.JWT_TOKEN, token);
}

//Login Function
login(data:any):Observable <any>{
    return this._httpClient.post(this.apiUrl +'oauth/token',data).pipe(
        map((response: any) => {
           //Save token in localstroage
           this._authenticated = true
           this.accessToken = response.access_token
           return response;
    
        })
    );



}

 check(): Observable<boolean>
    {
        // Check if the user is logged in
        if ( this._authenticated )
        {
            return of(true);
        }

        // Check the access token availability
        if ( !this.accessToken )
        {
            return of(false);
        }

        // Check the access token expire date
        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
         return of(true);
    }

    signOut(): any
    {
       // Remove the access token from the local storage
       localStorage.removeItem(this.JWT_TOKEN);
       // Set the authenticated flag to false
       this._authenticated = false;
       
    }
//SignUp Function
signup(data:string){
    return this._httpClient.post(this.apiUrl+'api/user/store',data)
}

getJwtToken(){
    return localStorage.getItem(this.JWT_TOKEN + '')
    }
}
