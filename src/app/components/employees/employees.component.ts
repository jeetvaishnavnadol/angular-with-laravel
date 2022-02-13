import { Employee } from './../../employee';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any;
  employee = new Employee();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getEmployeesData();
  }
  getEmployeesData() {
    this.dataService.getData().subscribe((res) => {
      // console.log((this.employees = res));
      // console.log(res);
      this.employees = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.employee).subscribe((res) => {
      this.getEmployeesData();
    });
  }
}
