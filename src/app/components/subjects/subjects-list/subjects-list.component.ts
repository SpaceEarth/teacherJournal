import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/common/entities/subject';
import { subjects } from 'src/app/common/constants/constants-subjects';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {
  subjects: Array<Subject> = subjects;

  constructor() { }

  ngOnInit(): void {
  }

}
