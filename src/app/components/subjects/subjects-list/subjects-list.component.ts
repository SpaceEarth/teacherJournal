import { Component, OnInit } from '@angular/core';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/common/entities/appState';
import { AppStore } from 'src/app/common/entities/appStore';
import { loadStudentsSubjects, deleteStudentSubject } from '../subjects.actions';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {
  public studentSubjects: StudentSubject[];
  public studentSubjects$: Observable<StudentSubject[]>;
  public routerLinkConfig: { [key: string]: string | any[] } = {
    addNewSubject: [`/${JournalRoutes.Subjects}`, JournalRoutes.Form],
  };

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.store$.dispatch(loadStudentsSubjects());
    this.studentSubjects$ = this.store$.select(AppStore.StudentsSubjects);
  }

  public getSubjectRouterLink(id: number): string | any[] {
    return [`/${JournalRoutes.Subjects}`, JournalRoutes.Table, id];
  }

  public onDeleteSubject(e: Event, subject: StudentSubject): void {
    const submit: boolean = confirm(`Delete ${subject.name}?`);

    if (!submit) {
      return;
    }

    this.store$.dispatch(deleteStudentSubject({ id: subject.id }));
    e.stopPropagation();
  }
}
