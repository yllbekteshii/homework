import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {
apiUrl = environment.apiUrl

  constructor(private _http:HttpClient  ) { }



//Get current user info
getUser(){
return  this._http.get(this.apiUrl+"api/user")
}
  //Updates User
  updateData(data:any){
    return this._http.post(this.apiUrl+'api/user/update/1',data).subscribe(res=>{
      console.log(res)
    })
  }
}

