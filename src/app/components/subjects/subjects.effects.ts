import { Injectable, AbstractType } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Effect, ofType, Actions } from '@ngrx/effects';

import { JournalDataService } from 'src/app/services/journal-data.service';
import {
    StudentsSubjectsActionTypes,
    studentsSubjectsLoadingSuccess,
    studentsSubjectsLoadingFailed,
    studentSubjectsDeletingSuccess,
    studentSubjectsDeletingFiled,
    studentSubjectAddingSuccess,
    studentSubjectAddingFiled,
    studentSubjectDateAddingSuccess,
    studentSubjectDateAddingFiled
} from './subjects.actions';
import { switchMap, map, catchError, first } from 'rxjs/operators';

@Injectable()
export class StudentsSubjectsEffects {

    @Effect()
    public loadStudentsSubjects: Observable<any> = this.action$.
        pipe(
            ofType(StudentsSubjectsActionTypes.LoadStudentsSubjects),
            switchMap(() => {
                return this.journalDataService.getSubjectData()
                    .pipe(
                        map(studentsSubjects => studentsSubjectsLoadingSuccess({ studentsSubjects })),
                        catchError(error => of(studentsSubjectsLoadingFailed({ error })))
                    );
            })
        );

    @Effect()
    public deleteStudentsSubject: Observable<any> = this.action$.
        pipe(
            ofType(StudentsSubjectsActionTypes.DeleteStudentSubjects),
            switchMap((action: any) => {
                return this.journalDataService.deleteSubjectById(action.id)
                    .pipe(
                        map(() => studentSubjectsDeletingSuccess({ id: action.id })),
                        catchError(error => of(studentSubjectsDeletingFiled({ error })))
                    );
            })
        );

    @Effect()
    public addStudentSubject: Observable<any> = this.action$
        .pipe(
            ofType(StudentsSubjectsActionTypes.AddStudentSubject),
            switchMap((action: any) => {
                return this.journalDataService.addSubject(action.studentSubject)
                    .pipe(
                        map((studentSubject) => studentSubjectAddingSuccess({ studentSubject })),
                        catchError(error => of(studentSubjectAddingFiled({ error })))
                    );
            })
        );

    @Effect()
    public addStudentSubjectDate: Observable<any> = this.action$
        .pipe(
            ofType(StudentsSubjectsActionTypes.AddStudentSubjectDate),
            switchMap(({id, studentSubject, date}) => {
                return this.journalDataService.addSubjectDate(id, studentSubject, date)
                    .pipe(
                        map(() => studentSubjectDateAddingSuccess({ id, date })),
                        catchError((error) => of(studentSubjectDateAddingFiled({ error })))
                    );
            })
        )

    constructor(
        private action$: Actions,
        private journalDataService: JournalDataService
    ) { }
}
