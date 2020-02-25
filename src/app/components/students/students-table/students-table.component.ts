import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { students } from 'src/app/common/constants/constants-students';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  students: Array<Student>;
  columns: Array<string>;
  
  constructor() { }

  ngOnInit(): void {
    this.students = students;
    this.columns = ['id', 'name', 'lastName', 'addres', 'description'];
  }

}
