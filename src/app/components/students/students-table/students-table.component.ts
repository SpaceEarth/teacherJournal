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
export class StudentsTableComponent implements OnInit, OnDestroy {
  public students: Student[] = [];
  public students$: Observable<Student[]>;
  public studentsSub: Subscription;
  public deleteStudentByIdSub: Subscription;
  public columns: string[] = [];
  public routerLinkConfig: { [key: string]: string | any[] } = {
    addNewUser: [`/${JournalRoutes.Students}`, JournalRoutes.Form],
  };

  constructor(
    private journalDataService: JournalDataService
  ) { }

  public ngOnInit(): void {
    this.students$ = this.journalDataService.getStudentsData();
    this.studentsSub = this.students$
      .subscribe(data => {
        this.students = data;
        this.columns = Object.keys(data[0]);
      });
  }

  public ngOnDestroy(): void {
    this.studentsSub.unsubscribe();
    if (this.deleteStudentByIdSub) {
      this.deleteStudentByIdSub.unsubscribe();
    }
  }

  public onClickDeleteUser(student: Student): void {
    const submit: boolean = confirm(`Delete ${student.name} ${student.lastName}?`);
    const studentId: number = student.id;

    if (submit) {
      this.deleteStudentByIdSub = this.journalDataService
        .deleteStudentById(studentId)
        .subscribe(() => {
          this.students = this.students.filter(stud => stud.id !== studentId);
        });
    }
  }
}
