import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { of, Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { StudentsActionTypes, StudentsLoadingSuccess, LoadStudents, StudentsLoadingFailed } from './students.actions';
import { JournalDataService } from 'src/app/services/journal-data.service';

@Injectable()
export class StudentEffects {

  @Effect()
  public loadStudents$:
    Observable<StudentsLoadingSuccess | StudentsLoadingFailed> = this.action$
      .pipe(
        ofType(StudentsActionTypes.LoadStudents),
        switchMap((action: LoadStudents) => {
          return this.journalDataService.getStudentsData(<string>action.searchKey)
            .pipe(
              map(students => new StudentsLoadingSuccess(students)),
              catchError(error => of(new StudentsLoadingFailed(error)))
            );
        })
      );

  constructor(
    private action$: Actions,
    private journalDataService: JournalDataService
  ) { }

}
