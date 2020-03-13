import { studentsLoadingSuccess, studentDeletingSuccess } from './students.actions';
import { Student } from 'src/app/common/entities/student';
import { on, createReducer, ActionReducer, Action } from '@ngrx/store';

const initialState: Student[] = [];

const _studentReducer: ActionReducer<Student[], Action> = createReducer(
  initialState,
  on(studentsLoadingSuccess, (state, action) => [...(action).students]),
  on(studentDeletingSuccess, (state, action) => {
    const ids: number[] = action.students.map(student => student.id);

    return state.filter((student: Student) => {
      return ids.includes(student.id);
    });
  })
);

export function studentReducer(state: Student[], action: Action): Student[] {
  return _studentReducer(state, action);
}
