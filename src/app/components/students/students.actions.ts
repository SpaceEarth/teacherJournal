import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/common/entities/student';

export enum StudentsActionTypes {
    LoadStudents = '[Students] Load Students',
    StudentsLoadingSuccess = '[Students] Students Loading Success',
    StudentsLoadingFailed = '[Students] Students Loading Failed',
    DeleteStudent = '[Students] Delete Student',
    StudentDeletingSuccess = '[Students] Students Deleting Success',
    StudentDeletingFiled = '[Students] Students Deleting Failed',
}

export const loadStudents = createAction(
    StudentsActionTypes.LoadStudents,
    props<{ searchKey: string }>()
);

export const studentsLoadingSuccess = createAction(
    StudentsActionTypes.StudentsLoadingSuccess,
    props<{ students: Student[] }>()
);

export const studentsLoadingFailed = createAction(
    StudentsActionTypes.StudentsLoadingFailed,
    props<{ error: any }>()
);

export const deleteStudent = createAction(
    StudentsActionTypes.DeleteStudent,
    props<{ id: number }>()
);

export const studentDeletingSuccess = createAction(
    StudentsActionTypes.StudentDeletingSuccess,
    props<{ students: Student[] }>()
);

export const studentDeletingFiled = createAction(
    StudentsActionTypes.StudentDeletingFiled,
    props<{ error: any }>()
);
