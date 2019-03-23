import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addForm:FormGroup;
  submitted:boolean=false;
  
  formBuilder: any;
  constructor(private formbuilder:FormBuilder,private router:Router,private userservice:UserServiceService) { }

  ngOnInit() {
    this.addForm=this.formbuilder.group({
      id:[],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      email:['',Validators.required]
    });
  }

  add(){
    this.submitted = true;
    
    // If validation failed, it should return
    // to Validate again
    if (this.addForm.invalid) {
      return;
    }
    
    this.userservice.createUser(this.addForm.value).subscribe(data=>{this.addForm.controls.value})

    this.router.navigate(['/listuser']);

  }



  
}
