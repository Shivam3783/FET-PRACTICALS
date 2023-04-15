import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private employees = [
    { id: 1, name: 'Shivam Patel', role: 'Software Engineer' },
    { id: 2, name: 'Manav Manek', role: 'UI Designer' },
    { id: 3, name: 'Tanmay Patel', role: 'Project Manager' },
    { id: 4, name: 'Vanshil Patel', role: 'QA Engineer' }
  ];
  
  constructor() { }
  
  getEmployees() {
    return this.employees;
  }
}
