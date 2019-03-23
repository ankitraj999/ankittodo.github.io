import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
//import { userInfo } from 'os';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users:any;
  flag:boolean=false;
  constructor(private userservice:UserServiceService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('username')!=null){
      this.userservice.getUser().subscribe(data=>{this.users=data});
      if(this.users){
       
        this.flag=true;
      }
    }
    else{
      this.router.navigate(['/login'])
    }
  }
 delUser(name:User):void{
   let result=confirm("Do you want to delete user");
   if(result){
     console.log(this.userservice.deleteUser(name.id));
    this.userservice.deleteUser(name.id).subscribe((data)=>{this.getusers()});
    
   } 
 }
 getusers()
 {
  this.userservice.getUser().subscribe(data=>{this.users=data});
 }
 editUser(name:User){
   localStorage.setItem("editUserId",name.id.toString());
   this.router.navigate(['edituser']);

 }
}
