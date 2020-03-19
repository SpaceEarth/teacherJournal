import { State, Selector, Action, StateContext } from '@ngxs/store';

import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { StudentsSubjectsAction } from './subjects.actions';
import { map, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Injectable, DefaultIterableDiffer } from '@angular/core';

@State<StudentSubject[]>({
    name: 'studentSubjects',
    defaults: []
})
@Injectable()
export class StudentSubjectsState {

    @Selector()
    public static getStudentSubjects(state: StudentSubject[]): StudentSubject[] {
        return state;
    }

    @Selector()
    public static getStudentSubjectById(state: StudentSubject[]): any {
        return (id) => {
            const studentSubjects: StudentSubject[] = StudentSubjectsState.getStudentSubjects(state);

            return studentSubjects.find(s => s.id === id);
        };
    }

    @Selector()
    public static getStudentSubjectsDates(state: StudentSubject[]): any {
        return (id) => {
            const studentSubjects: StudentSubject[] = StudentSubjectsState.getStudentSubjects(state);
            const studentSubject: StudentSubject = studentSubjects.find(s => s.id === id);

            return Object.keys((studentSubject || {}).journal || {});
        };
    }

    constructor(private journalDataService: JournalDataService) { }

    @Action(StudentsSubjectsAction.Load)
    public loadStudentsSubjects({ setState }: StateContext<StudentSubject[]>): Observable<StudentSubject[]> {
        return this.journalDataService.getSubjectData().pipe(
            map(studentSubjects => setState(studentSubjects)), // TODO: rewrite to dispatch
            catchError(() => EMPTY)
        );
    }

    @Action(StudentsSubjectsAction.Delete)
    public deleteStudentsSubject(
        { getState, setState }: StateContext<StudentSubject[]>,
        action: StudentsSubjectsAction.Delete
    ): Observable<StudentSubject[]> {

        return this.journalDataService.deleteSubjectById(action.id).pipe(
            map(() => { // TODO: rewrite to dispatch
                const state: StudentSubject[] = getState();
                const deletedId: number = action.id;

                return setState(
                    state.filter(subj => subj.id !== deletedId)
                );

            }),
            catchError(() => EMPTY)
        );
    }

    @Action(StudentsSubjectsAction.Add)
    public addStudentSubject(
        { getState, setState }: StateContext<StudentSubject[]>,
        action: StudentsSubjectsAction.Add
    ): Observable<StudentSubject[]> {

        return this.journalDataService.addSubject(action.studentSubject).pipe(
            map(() => setState( // TODO: rewrite to dispatch
                [...getState(), action.studentSubject]
            )),
            catchError(() => EMPTY)
        );
    }

    @Action(StudentsSubjectsAction.AddDate)
    public addStudentSubjectDate(
        { getState, setState }: StateContext<StudentSubject[]>,
        { id, studentSubject, date }: StudentsSubjectsAction.AddDate
    ): Observable<StudentSubject[]> {

        return this.journalDataService.addSubjectDate(id, studentSubject, date).pipe(
            map(() => { // TODO: rewrite to dispatch
                const studentSubjects: StudentSubject[] = getState();
                const studSubjInd: number = studentSubjects
                    .findIndex(e => e.id === id);
                const result: StudentSubject[] = JSON.parse(JSON.stringify(studentSubjects));

                result[studSubjInd].journal[date] = {};

                return setState(
                    result
                );
            }),
            catchError(() => EMPTY)
        );
    }

}
