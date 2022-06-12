import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[
    {
      id:1,
      name:"yll",
      email:"yll@gmail.com",
      phone:"054555",
      salary:"800000"
    },
    {
      id:2,
      name:"yll2",
      email:"yll2@gmail.com",
      phone:"0545552",
      salary:"80000022"
    }
  ]

constructor() { }

  //returns the users array
  getUser(){
    return this.users;
    
  }
  //New User
  newUserAdd(user:User) {
    this.users.push(user)
  }
  deleteUser(id:number){
    let user = this.users.find(x=>x.id === id)
    let index = this.users.indexOf(user,0)
    this.users.splice(index,1)
    
  }
  //Get single User

  getSingleUser(id:number){
    return this.users.find(x=> x.id === id)
   }
   //UpdatesUser
   updateUser(user:User){
    debugger
     let oldUser = this.users.find(x=>x.id === user.id);
     oldUser.name = user.name;
     oldUser.email = user.email;
     oldUser.phone = user.phone;
     oldUser.salary = user.salary;
   }
}
