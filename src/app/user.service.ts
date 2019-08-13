import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User[]=[
    {id:1,name:'Ravi',email:'ravi@df.com'},
    {id:2,name:'Ravi21',email:'ravi2@df.com'},
    {id:3,name:'Ravi3',email:'ravi3@df.com'}
  ]
  constructor() { }
  getUsers():User[]{
    return this.user;
  }
  saveUser(newuser:User){
    this.user.push(newuser);
  }

  getuserbyId(id:number):User{
    return this.user.find(e=> e.id === id)
  }
}
