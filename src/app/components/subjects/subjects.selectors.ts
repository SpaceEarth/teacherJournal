import { createSelector } from '@ngrx/store';
import { AppStore } from 'src/app/common/entities/appStore';
import { AppState } from 'src/app/common/entities/appState';
import { StudentSubject } from 'src/app/common/entities/studentSubject';

const selectStudentSubjects = (state: AppState) => {
    return state[AppStore.StudentsSubjects];
};

export const getStudentSubjectById = createSelector(
    selectStudentSubjects,
    (state, props) => state.find(s => s.id === props.id)
);

export const studentSubjectsDates = createSelector(
    selectStudentSubjects,
    (state, props) => {
        const studentSubject: StudentSubject = state.find(s => s.id === props.id);

        return Object.keys((studentSubject || {}).journal || {});
    }
);
