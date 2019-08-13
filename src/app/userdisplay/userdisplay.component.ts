import { Component, OnInit,Input } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
  
  constructor(private userService:UserService,private _router:Router) { }
  user:User[];
  @Input()users:User;
  ngOnInit() {
    this.user = this.userService.getUsers();
  }
  editUser(){
    this._router.navigate(['/edituser',this.users.id])
  }
}
