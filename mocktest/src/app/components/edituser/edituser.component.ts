import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  edituserForm: FormGroup;
  submitted: boolean = false;

  formBuilder: any;
  constructor(private formbuilder: FormBuilder, private router: Router, private userservice: UserServiceService) { }

  ngOnInit() {
    
    if (localStorage.getItem("username") != null) {
      let userId = localStorage.getItem("editUserId");
      if (!userId) {
        alert("invalid action");
        this.router.navigate(['listuser']);
        return;
      }


      this.edituserForm = this.formbuilder.group({
        id: [],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        email: ['', Validators.required]
      });

      this.userservice.getUserById(+userId).subscribe(data => { this.edituserForm.setValue(data) })

    }


  }

   editUser(){
   let result=confirm("Do you want to save the changes");
     if(result){
       this.userservice.updateUser(this.edituserForm.value).subscribe(data=>{this.router.navigate(['listuser'])});
     }

    }
}
