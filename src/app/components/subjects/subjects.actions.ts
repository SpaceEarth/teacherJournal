import { createAction, props } from '@ngrx/store';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { studentSubjects } from 'src/app/common/constants/constants-subjects';

export enum StudentsSubjectsActionTypes {
    LoadStudentsSubjects = '[StudentsSubjects] Load StudentsSubjects',
    StudentsSubjectsLoadingSuccess = '[StudentsSubjects] StudentsSubjects Loading Success',
    StudentsSubjectsLoadingFailed = '[StudentsSubjects] StudentsSubjects Loading Failed',
    DeleteStudentSubjects = '[StudentsSubjects] Delete StudentSubjects',
    StudentSubjectsDeletingSuccess = '[StudentsSubjects] StudentsSubjects Deleting Success',
    StudentSubjectsDeletingFiled = '[StudentsSubjects] StudentsSubjects Deleting Failed',
}

export const loadStudentsSubjects = createAction(
    StudentsSubjectsActionTypes.LoadStudentsSubjects
);

export const studentsSubjectsLoadingSuccess = createAction(
    StudentsSubjectsActionTypes.StudentsSubjectsLoadingSuccess,
    props<{ studentsSubjects: StudentSubject[] }>()
);

export const studentsSubjectsLoadingFailed = createAction(
    StudentsSubjectsActionTypes.StudentsSubjectsLoadingFailed,
    props<{ error: any }>()
);

export const deleteStudentSubject = createAction(
    StudentsSubjectsActionTypes.DeleteStudentSubjects,
    props<{ id: number }>()
);

export const studentSubjectsDeletingSuccess = createAction(
    StudentsSubjectsActionTypes.StudentSubjectsDeletingSuccess,
    props<{ id: number }>()
);

export const studentSubjectsDeletingFiled = createAction(
    StudentsSubjectsActionTypes.StudentSubjectsDeletingFiled,
    props<{ error: any }>()
);
