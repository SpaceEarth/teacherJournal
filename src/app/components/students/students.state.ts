import { Observable, EMPTY } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { State, Selector, Action, StateContext } from '@ngxs/store';

import { StudentsActions } from './students.actions';
import { Student } from 'src/app/common/entities/student';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { Injectable } from '@angular/core';

@State<Student[]>({
  name: 'students',
  defaults: []
})
@Injectable()
export class StudentState {

  @Selector()
  public static getStudents(state: Student[]): Student[] {
    return state;
  }

  @Selector()
  public static getStudentColumns(state: Student[]): string[] {
    const student: Student[] = StudentState.getStudents(state);

    return Object.keys(student[0] || {});
  }

  constructor(private journalDataService: JournalDataService) { }

  @Action(StudentsActions.Load)
  public loadStudents({ setState }: StateContext<Student[]>, action: StudentsActions.Load): Observable<Student[]> {
    return this.journalDataService.getStudentsData(action.searchKey).pipe(
      map(students => setState( students )), // TODO: rewrite to dispatch
      catchError(() => EMPTY)
      // tap(success => success ?
      //   dispatch(StudentsActions.LoadingSuccess) :
      //   dispatch(StudentsActions.LoadingFailed)), // TODO: rewrite to dispatch
    );
  }

  // @Action(StudentsActions.LoadingSuccess)
  // public loadingSuccess({ setState }: StateContext<Student[]>, action: StudentsActions.LoadingSuccess): Student[] {
  //   return setState(action.students);
  // }

  @Action(StudentsActions.Delete)
  public deleteStudent({ setState }: StateContext<Student[]>, action: StudentsActions.Delete): Observable<Student[]> {
    return this.journalDataService.deleteStudentById(action.id).pipe(
      map(students => setState( // TODO: rewrite to dispatch
        students.filter(st => st.id !== action.id)
      )),
      catchError(() => EMPTY)
    );
  }

  @Action(StudentsActions.Add)
  public addStudent({ getState, setState }: StateContext<Student[]>, action: StudentsActions.Add): Observable<Student[]> {
    return this.journalDataService.addStudent(action.student).pipe(
      map((student) => { // TODO: rewrite to dispatch
        const state: Student[] = getState();

        return setState([...state, student]);
      }),
      catchError(() => EMPTY)
    );
  }
}
