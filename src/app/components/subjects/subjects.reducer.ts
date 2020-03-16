import { createReducer, Action, ActionReducer, on } from '@ngrx/store';

import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { studentsSubjectsLoadingSuccess, studentSubjectsDeletingSuccess } from './subjects.actions';

const initialState: StudentSubject[] = [];

const _subjectsReducer: ActionReducer<StudentSubject[], Action> = createReducer(
    initialState,
    on(studentsSubjectsLoadingSuccess, (_state, action) => {
        return [...action.studentsSubjects];
    }),
    on(studentSubjectsDeletingSuccess, (state, action) => {
        const deletedId: number = action.id;

        return state.filter(subj => {
            return subj.id !== deletedId;
        });
    })
);

export function subjectsReducer(state: StudentSubject[], action: Action): StudentSubject[] {
    return _subjectsReducer(state, action);
}
