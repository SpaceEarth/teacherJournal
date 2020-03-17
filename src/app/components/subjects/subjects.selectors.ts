import { createSelector } from '@ngrx/store';
import { AppStore } from 'src/app/common/entities/appStore';
import { AppState } from 'src/app/common/entities/appState';

const selectStudentSubjects = (state: AppState) => {
    return state[AppStore.StudentsSubjects];
};

export const getStudentSubjectById = createSelector(
    selectStudentSubjects,
    (state, props) => state.find(s => s.id === props.id)
);
