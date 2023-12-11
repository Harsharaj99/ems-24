import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  registerEmployee(data:any){
   return this.http.post(this.url+"users",data)
  }
  loginUser(){
    return this.http.get(this.url+"users")
  }
  addUser(data:any){
    return this.http.post(this.url+"employees",data)
  }
  getEmployee(){
    return this.http.get(this.url+"employees")
  }
  getCurrentEmploye(id:any){
    return this.http.get(`${this.url+"employees"}/${id}`)
  }
  editEmployee(id:any,data:any){
    return this.http.put(`${this.url+"employees"}/${id}`,data)
  }

}
