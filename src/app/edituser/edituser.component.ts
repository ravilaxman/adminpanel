import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user.model';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private userService:UserService,private _route:ActivatedRoute) { }
  user:User;
  ngOnInit() {
    //this.getUserbyId()
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
    })
    
  }

  getUserbyId(){
    this.user = this.userService.getuserbyId(this.user.id)
  }

}
