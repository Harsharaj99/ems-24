import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private log: EmployeeService, private route: Router) { }
  employees = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.email]),


    password: new FormControl('', [Validators.required, Validators.minLength(6)])

  })

  get email() {
    return this.employees.get('email')
  }

  get pswd() {
    return this.employees.get('password')
  }
  login() {
    this.log.loginUser().subscribe((res)=>{
      console.log(res);
      const user=(res as any[]).find((item)=>{
        return item.email===this.employees.value.email && item.password===this.employees.value.password
      })
      if(user){
        alert("logined successfully")
        this.employees.reset()
        this.route.navigateByUrl('list')
      }
      else{
        alert("user not found")
        this.employees.reset()

      }
      
    })
   

  }




}
