import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private userService:UserService,private _router:Router) { }
  user:User={
    id:null,
    name:null,
    email:null
  }
  ngOnInit() {
  }
  saveUser(){
    this.userService.saveUser(this.user);
    this._router.navigate(['user'])
  }
}
