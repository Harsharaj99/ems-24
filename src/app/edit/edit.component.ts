import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private act:ActivatedRoute,private emp:EmployeeService,private route:Router){}

  employees=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    salary:new FormControl('')
  })

  ngOnInit(): void {
    console.log(this.act.snapshot.params['id']);
    this.emp.getCurrentEmploye(this.act.snapshot.params['id']).subscribe((res)=>{
      console.log(res);
      this.employees=new FormGroup({
        name:new FormControl(((res as any).name)),
        email:new FormControl((res as any).email),
        phone:new FormControl((res as any).phone),
        salary:new FormControl((res as any).salary)
      })
    
      
    })
    
   
  }
  edit(){
    this.emp.editEmployee(this.act.snapshot.params['id'],this.employees.value).subscribe((res)=>{
      console.log(res);
      alert("updated succesfully")
      this.route.navigateByUrl('list')

      
    })

  }

  



}
