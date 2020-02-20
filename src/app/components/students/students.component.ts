import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/common/constants/constants-students';
import { Student } from 'src/app/common/entities/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Array<Student> = []
  columns: Array<string> = []
  formFields: Array<string> = []
  formPage: boolean

  constructor() { }

  ngOnInit(): void {
    this.students = students;
    this.columns = ['id', 'name', 'lastName', 'addres', 'description'];
    this.formPage = false;
    this.formFields = ['* Name', '* Last Name', 'Address', 'Description']
  }

  openFormEvent() {
    this.formPage = true;
  }

}
