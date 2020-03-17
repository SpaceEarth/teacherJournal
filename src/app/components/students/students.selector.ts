import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/common/entities/appState';

const selectFirstStudent = (state: AppState) => state.students || [];

export const getStudentsColumns = createSelector(
    selectFirstStudent,
    (state) => Object.keys(state[0] || {})
);
