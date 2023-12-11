import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private emp:EmployeeService,private route:Router){}

  employees=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    status:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])

  })
  get name(){
    return this.employees.get('name')
  }
  get email(){
    return this.employees.get('email')
  }
  get phone(){
    return this.employees.get('phone')
  }
  get pswd(){
    return this.employees.get('password')
  }

  register(){
    this.emp.registerEmployee(this.employees.value).subscribe((res)=>{
      console.log(res);
      alert("registered succesfully")
      this.employees.reset()
      this.route.navigateByUrl('login')

      
    })

  }

}
