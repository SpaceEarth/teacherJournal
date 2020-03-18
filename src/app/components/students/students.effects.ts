import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { of, Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import {
  StudentsActionTypes,
  studentsLoadingSuccess,
  studentsLoadingFailed,
  studentDeletingSuccess,
  studentDeletingFiled,
  studentAddingSuccess,
  StudentAddingFiled
} from './students.actions';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { Action } from '@ngrx/store';

@Injectable()
export class StudentEffects {

  @Effect()
  public loadStudents$:
    Observable<Action> = this.action$
      .pipe(
        ofType(StudentsActionTypes.LoadStudents),
        switchMap((action: any) => {
          return this.journalDataService.getStudentsData(<string>action.searchKey)
            .pipe(
              map(students => studentsLoadingSuccess({ students })),
              catchError(error => of(studentsLoadingFailed({ error })))
            );
        })
      );

  @Effect()
  public deleteStudent$:
    Observable<Action> = this.action$
      .pipe(
        ofType(StudentsActionTypes.DeleteStudent),
        switchMap((action: any) => {
          return this.journalDataService.deleteStudentById(action.id)
            .pipe(
              map(students => studentDeletingSuccess({ students })),
              catchError(error => of(studentDeletingFiled({ error })))
            );
        })
      );

  @Effect()
  public addStudent$:
    Observable<Action> = this.action$
      .pipe(
        ofType(StudentsActionTypes.AddStudent),
        switchMap((action: any) => {
          return this.journalDataService.addStudent(action.student)
            .pipe(
              map((student) => studentAddingSuccess({ student })),
              // map(() => go()))
              catchError(error => of(StudentAddingFiled({ error })))
            );
        })
      );

  constructor(
    private action$: Actions,
    private journalDataService: JournalDataService
  ) { }

}
