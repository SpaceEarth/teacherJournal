import { Component, OnInit } from '@angular/core';
import { StudentViewModel } from 'src/app/common/entities/student';
import { students } from 'src/app/common/constants/constants-students';
import { ActivatedRoute } from '@angular/router';
import { SubjectViewModel } from 'src/app/common/entities/subjectViewModel';
import { subjects } from 'src/app/common/constants/constants-subjects';

@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.scss']
})
export class SubjectsTableComponent implements OnInit {
  public students: Array<StudentViewModel> = [];
  public columns: Array<string> = [];
  public subject: SubjectViewModel;

  constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.subject = subjects.find(el => el.id === id);
    this.students = students;
    this.columns = ['name', 'lastName', 'averageMark'];
  }

}
