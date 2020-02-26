import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { students } from 'src/app/common/constants/constants-students';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'src/app/common/entities/subject';
import { subjects } from 'src/app/common/constants/constants-subjects';


@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.scss']
})
export class SubjectsTableComponent implements OnInit {
  students: Array<Student>;
  columns: Array<string>;
  subject: Subject;
  
  constructor(
    private route: ActivatedRoute,
  ) { 
    const id = +this.route.snapshot.paramMap.get("id");
    this.subject = subjects.find(el => el.id === id);
  }

  ngOnInit(): void {
    this.students = students;
    this.columns = ['name', 'lastName', 'averageMark'];
  }

}
