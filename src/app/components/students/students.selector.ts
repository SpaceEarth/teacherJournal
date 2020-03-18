import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/common/entities/appState';
import { AppStore } from 'src/app/common/entities/appStore';

const selectFirstStudent = (state: AppState) => state.students || [];

export const selectStudents = (state: AppState) => state[AppStore.Students];

export const getStudentsColumns = createSelector(
    selectFirstStudent,
    (state) => Object.keys(state[0] || {})
);
