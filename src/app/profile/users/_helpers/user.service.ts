import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { environment } from 'environments/environment';
import { BehaviorSubject, map, Observable, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: BehaviorSubject<User[] | null> = new BehaviorSubject<User[]>(null);

  apiUrl = environment.apiUrl

  get users$() {
    return this.users.asObservable();
  }

  constructor(private http: HttpClient) { }

  //Get users
  getUsers() {
    return this.http.get<User[]>(this.apiUrl + "api/users").pipe(
      map((data: any) => {
        this.users.next(data);
        return data
      }))
  }
  // New User
  newUserAdd(user: User[]) {
    return this.users$.pipe(
      take(1),
      switchMap(users => this.http.post<User>(this.apiUrl + "api/user/store", user).pipe(
        map((newUser: User) => {
          this.users.next([newUser, ...users]);
          return newUser;
        }))
      )
    )
  }

  userUpdate(id: number, user: User) {
    return this.users$.pipe(
      take(1),
      switchMap(user => this.http.post(this.apiUrl + `api/user/update/${id}`, user).pipe(
        map((_updatedUser: any) => {
          const userIndex = user.findIndex(u => u.id === id);
          user.splice(userIndex, 1, _updatedUser);
          this.users.next(user);
          return _updatedUser
        })
      )
      ))
  }
  
    deleteUser(id:number):Observable <User>{
      debugger
      return this.users$.pipe(
        take(1),
        switchMap(users => this.http.delete<User>(this.apiUrl+'api/user/delete/' + id).pipe(
          map((deletedUser: any) => {
            const index = users.findIndex(x=>x.id === id);
            users.splice(index,1);
            this.users.next(users)
            return deletedUser;
          })
      ))
      )
  }

  getSingleUser(id:number){
    return this.http.get<User>(this.apiUrl+`api/user/${id}`)
   }

  //returns the users array

  // deleteUser(id:number){
  //   let user = this.users.find(x=>x.id === id)
  //   let index = this.users.indexOf(user,0)
  //   this.users.splice(index,1)

  // }
  //Get single User


  //UpdatesUser
  //  updateUser(user:User){
  //   debugger
  //    let oldUser = this.users.find(x=>x.id === user.id);
  //    oldUser.name = user.name;
  //    oldUser.email = user.email;
  //    oldUser.phone = user.phone;
  //    oldUser.salary = user.salary;
  //  }}





}

