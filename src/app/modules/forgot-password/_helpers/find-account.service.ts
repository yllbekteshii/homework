import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindAccountService {

  apiUrl= environment.apiUrl;

constructor(
  private _http:HttpClient,
  ) { }

  //Send the new password on api
  resetPassword(data:any): Observable<any>{
    return this._http.post<any[]>(this.apiUrl+'api/user/password', data).pipe(
        map((data: any) => {
            console.log(data);
            return data;
        }),
        catchError((err) => {
            console.error(err);
            throw err;
        }
    )
    );
  }
  //Send the email request on api
  sendEmailResset(data:string):Observable <string>{
    return this._http.post<string>(this.apiUrl + 'api/forgot-password',data)
  }
  
}
