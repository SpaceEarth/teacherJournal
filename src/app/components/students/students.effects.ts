import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { of, Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import {
  StudentsActionTypes,
  loadStudents,
  studentsLoadingSuccess,
  studentsLoadingFailed,
  deleteStudent,
  studentDeletingSuccess,
  studentDeletingFiled
} from './students.actions';
import { JournalDataService } from 'src/app/services/journal-data.service';

@Injectable()
export class StudentEffects {

  @Effect()
  public loadStudents$:
    Observable<any> = this.action$
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
    Observable<any> = this.action$
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

  constructor(
    private action$: Actions,
    private journalDataService: JournalDataService
  ) { }

}
