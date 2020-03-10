import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Observable, Subscription } from 'rxjs';
import { JournalDataService } from 'src/app/services/journal-data.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  public students$: Observable<Student[]>;
  public routerLinkConfig: { [key: string]: string | any[] } = {
    addNewUser: [`/${JournalRoutes.Students}`, JournalRoutes.Form],
  };

  constructor(
    private journalDataService: JournalDataService
  ) { }

  public ngOnInit(): void {
    this.students$ = this.journalDataService.getStudentsData();
  }

  public getColumns(students: Student[]): string[] {
    students = students || [];

    return Object.keys(students[0] || {});
  }

  public onClickDeleteUser(student: Student): void {
    const submit: boolean = confirm(`Delete ${student.name} ${student.lastName}?`);

    if (!submit) {
      return;
    }

    this.students$ = this.journalDataService.deleteStudentById(student.id);
  }
}
