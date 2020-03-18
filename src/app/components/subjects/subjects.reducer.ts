import { createReducer, Action, ActionReducer, on } from '@ngrx/store';

import { StudentSubject } from 'src/app/common/entities/studentSubject';
import {
    studentsSubjectsLoadingSuccess,
    studentSubjectsDeletingSuccess,
    studentSubjectAddingSuccess,
    studentSubjectDateAddingSuccess
} from './subjects.actions';

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
    }),
    on(studentSubjectAddingSuccess, (state, action) => [...state, action.studentSubject]),
    on(studentSubjectDateAddingSuccess, (state, action) => {
        const studSubjInd: number = state.findIndex(e => e.id === action.id);
        const result: StudentSubject[] = JSON.parse(JSON.stringify(state));

        result[studSubjInd].journal[action.date] = {};

        return result;
    })
);

export function subjectsReducer(state: StudentSubject[], action: Action): StudentSubject[] {
    return _subjectsReducer(state, action);
}
