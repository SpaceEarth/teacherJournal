import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/common/constants/constants-students';
import { Student } from 'src/app/common/entities/student';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  students: Array<Student>
  columns: Array<String>

  constructor() { }

  ngOnInit(): void {
    this.students = students;
    this.columns = ['id', 'name', 'lastName', 'addres', 'description'];
  }

}
