import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
constructor(private emp:EmployeeService){}
collector:any={}
  ngOnInit(): void {
    this.emp.getEmployee().subscribe((res)=>{
      console.log(res);
      this.collector=res
      
    })


    
  }

}
