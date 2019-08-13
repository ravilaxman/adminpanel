import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  {path:'user',component:UserdisplayComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'edituser/:id',component:EdituserComponent},
  {path:'',redirectTo:'/user',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
