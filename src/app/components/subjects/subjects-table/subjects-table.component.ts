import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { students } from 'src/app/common/constants/constants-students';

@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.scss']
})
export class SubjectsTableComponent implements OnInit {
  students: Array<Student>;
  columns: Array<string>;
  
  constructor() { }

  ngOnInit(): void {
    this.students = students;
    this.columns = ['name', 'lastName', 'averageMark'];
  }

}
