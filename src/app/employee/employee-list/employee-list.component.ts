import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeList } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() name: any
  @Output() thanks: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  employee: EmployeeList[] = [
    {
      name: "uday",
      age: 23,
      location: ''
    },
    {
      name: "kumar",
      age: 24,
      location: ''
    }
  ]
  ngOnInit(): void {
    this.removestring()
  }
  sendObject(e: any) {
    this.thanks.emit(this.employee)
  }

  removestring() {
    let nameVal = 'uday kumar';
    let finalVal = nameVal.split(' ').map(item => item.toUpperCase().substring(0, 1)).join(' ')
    console.log(finalVal);
    let reverse = nameVal.split('').reverse().join('')
    console.log(reverse);
  }

}
