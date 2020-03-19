import { Component, OnInit } from '@angular/core';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { StudentsSubjectsAction } from '../subjects.actions';
import { StudentSubjectsState } from '../subjects.state';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {
  public studentSubjects: StudentSubject[];

  @Select(StudentSubjectsState.getStudentSubjects)
  public studentSubjects$: Observable<StudentSubject[]>;
  public routerLinkConfig: { [key: string]: string | any[] } = {
    addNewSubject: [`/${JournalRoutes.Subjects}`, JournalRoutes.Form],
  };

  constructor(
    private store: Store
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(new StudentsSubjectsAction.Load());
  }

  public getSubjectRouterLink(id: number): string | any[] {
    return [`/${JournalRoutes.Subjects}`, JournalRoutes.Table, id];
  }

  public onDeleteSubject(e: Event, subject: StudentSubject): void {
    const submit: boolean = confirm(`Delete ${subject.name}?`);

    if (!submit) {
      return;
    }

    this.store.dispatch(new StudentsSubjectsAction.Delete(subject.id ));
    e.stopPropagation();
  }
}
