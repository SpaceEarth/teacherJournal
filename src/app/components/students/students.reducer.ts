import { StudentsActionTypes, StudentsActions, StudentsLoadingSuccess } from './students.actions';
import { Student } from 'src/app/common/entities/student';

const initialState: Student[] = [];

export function studentReducer(state: Student[] = initialState, action: StudentsActions): Student[] {
    switch (action.type) {
        case StudentsActionTypes.StudentsLoadingSuccess:
            return [...(<StudentsLoadingSuccess>action).students];
        default:
            return state;
    }
}
