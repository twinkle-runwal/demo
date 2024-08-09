import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employees';
  employees: any = [];

  employeesForm = new FormGroup({
    id: new FormControl(0, { nonNullable: true }),
    name: new FormControl('', {nonNullable: true})
  });

  constructor(private appService: AppService){ }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    return this.appService.getEmployees().subscribe((data: {}) => {
      console.log(data);
      this.employees = data;
    })
  }

  addEmployee(){
    this.appService.addEmployee(this.employeesForm.value as Employee)
    .subscribe(employee => {
        this.employees.push(employee);
         this.getEmployees();
         this.employeesForm.reset();
       });
 }
}
