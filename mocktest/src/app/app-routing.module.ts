import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component4Component } from './components/component4/component4.component';
import { Component3Component } from './components/component3/component3.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EdituserComponent } from './components/edituser/edituser.component';


const routes: Routes = [
  {path:'home',component:Component1Component},
  {path:'component2',component:Component2Component},
  {path:'component3',component:Component3Component},
  {path:'component4',component:Component4Component},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'listuser',component:ListUserComponent},
  {path:'edituser',component:EdituserComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
