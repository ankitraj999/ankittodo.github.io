import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from  '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:3000/users";

  getUser(){
    return this.http.get<User[]>(this.baseUrl);
  }
  getUserById(id:number){
    return this.http.get<User[]>(this.baseUrl+"/"+id);
  }
 deleteUser(id:number){
   return this.http.delete(this.baseUrl+"/"+id);
 }
 createUser(user:User){
   return this.http.post(this.baseUrl,user);
 }
  updateUser(user:User){
   return this.http.put(this.baseUrl+"/"+user.id,user);
  }

}
