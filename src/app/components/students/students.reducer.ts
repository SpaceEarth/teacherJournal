import { studentsLoadingSuccess, studentDeletingSuccess, studentAddingSuccess } from './students.actions';
import { Student } from 'src/app/common/entities/student';
import { on, createReducer, ActionReducer, Action } from '@ngrx/store';

const initialState: Student[] = [];

const _studentReducer: ActionReducer<Student[], Action> = createReducer(
  initialState,
  on(studentsLoadingSuccess, (_state, action) => [...(action).students]),
  on(studentDeletingSuccess, (state, action) => {
    const ids: number[] = action.students.map(student => student.id);

    return state.filter((student: Student) => {
      return ids.includes(student.id);
    });
  }),
  on(studentAddingSuccess, (state, action) => [...state, action.student])
);

export function studentReducer(state: Student[], action: Action): Student[] {
  return _studentReducer(state, action);
}
