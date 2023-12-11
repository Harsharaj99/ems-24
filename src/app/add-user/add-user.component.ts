import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
constructor(private emp:EmployeeService,private route:Router){}
  employees=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    salary:new FormControl('',[Validators.required])
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
  get salary(){
    return this.employees.get('salary')
  }
  
  
  

  add(){
    this.emp.addUser(this.employees.value).subscribe((res)=>{
      console.log(res);
      alert("added successfully")
      this.route.navigateByUrl('list')

      
    })

  }
 
}
