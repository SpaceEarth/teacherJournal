import { createAction, props } from '@ngrx/store';
import { StudentSubject } from 'src/app/common/entities/studentSubject';

export enum StudentsSubjectsActionTypes {
    LoadStudentsSubjects = '[StudentsSubjects] Load StudentsSubjects',
    StudentsSubjectsLoadingSuccess = '[StudentsSubjects] StudentsSubjects Loading Success',
    StudentsSubjectsLoadingFailed = '[StudentsSubjects] StudentsSubjects Loading Failed',
    DeleteStudentSubjects = '[StudentsSubjects] Delete StudentSubjects',
    StudentSubjectsDeletingSuccess = '[StudentsSubjects] StudentsSubjects Deleting Success',
    StudentSubjectsDeletingFiled = '[StudentsSubjects] StudentsSubjects Deleting Failed',
    AddStudentSubject = '[Students] Add StudentSubject',
    StudentSubjectAddingSuccess = '[Students] StudentsSubject Adding Success',
    StudentSubjectAddingFiled = '[Students] StudentsSubject Adding Failed',
    AddStudentSubjectDate = '[Students] Add StudentSubject Date',
    StudentSubjectDateAddingSuccess = '[Students] StudentsSubject Date Adding Success',
    StudentSubjectDateAddingFiled = '[Students] StudentsSubject Date Adding Failed',
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

export const addStudentSubject = createAction(
    StudentsSubjectsActionTypes.AddStudentSubject,
    props<{ studentSubject: StudentSubject }>()
);

export const studentSubjectAddingSuccess = createAction(
    StudentsSubjectsActionTypes.StudentSubjectAddingSuccess,
    props<{ studentSubject: StudentSubject }>()
);

export const studentSubjectAddingFiled = createAction(
    StudentsSubjectsActionTypes.StudentSubjectAddingFiled,
    props<{ error: any }>()
);

export const addStudentSubjectDate = createAction(
    StudentsSubjectsActionTypes.AddStudentSubjectDate,
    props<{
        id: number,
        date: string,
        studentSubject: StudentSubject
    }>()
);

export const studentSubjectDateAddingSuccess = createAction(
    StudentsSubjectsActionTypes.StudentSubjectDateAddingSuccess,
    props<{
        id: number,
        date: string
    }>()
);

export const studentSubjectDateAddingFiled = createAction(
    StudentsSubjectsActionTypes.StudentSubjectDateAddingFiled,
    props<{ error: any }>()
);
