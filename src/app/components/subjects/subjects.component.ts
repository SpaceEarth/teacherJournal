import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/common/entities/subject';
import { subjects } from 'src/app/common/constants/constants-subjects';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  subjects: Array<Subject> = subjects;

  constructor() { }

  ngOnInit(): void {
  }

}
