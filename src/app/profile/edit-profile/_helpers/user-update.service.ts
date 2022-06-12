import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { Observable } from 'rxjs';
import { User } from '../edit-profile.component';




@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {
apiUrl = environment.apiUrl

  constructor(private _http:HttpClient  ) { }



//Get current user info
getUser():Observable<User[]>{
return this._http.get<User[]>(this.apiUrl+"api/user")
}
  //Updates User
  updateData(data:User){
    return this._http.post(this.apiUrl+'api/user/update/1',data).subscribe((res:any):User[]=>{
      console.log(res)
      return res;
    })
  }
}

