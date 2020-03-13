import { Action } from '@ngrx/store';
import { Student } from 'src/app/common/entities/student';

export enum StudentsActionTypes {
    LoadStudents = '[Students] Load Students',
    StudentsLoadingSuccess = '[Students] Students Loading Success',
    StudentsLoadingFailed = '[Students] Students Loading Failed',
    DeleteStudent = '[Students] Delete Student',
    StudentDeletingSuccess = '[Students] Students Deleting Success',
    StudentDeletingFiled = '[Students] Students Deleting Failed',
}

export class LoadStudents implements Action {
    public readonly type: StudentsActionTypes = StudentsActionTypes.LoadStudents;

    constructor(public searchKey: string) {}
}

export class StudentsLoadingSuccess implements Action {
    public readonly type: StudentsActionTypes = StudentsActionTypes.StudentsLoadingSuccess;

    constructor(public students: Student[]) {}
}

export class StudentsLoadingFailed implements Action {
    public readonly type: StudentsActionTypes = StudentsActionTypes.StudentsLoadingFailed;

    constructor(public error: any) {}
}

export class DeleteStudent implements Action {
    public readonly type: StudentsActionTypes = StudentsActionTypes.DeleteStudent;

    constructor(public id: number) {}
}

export class StudentDeletingSuccess implements Action {
    public readonly type: StudentsActionTypes = StudentsActionTypes.StudentDeletingSuccess;

    constructor(public students: Student[]) {}
}

export class StudentDeletingFiled implements Action {
    public readonly type: StudentsActionTypes = StudentsActionTypes.StudentDeletingFiled;

    constructor(public error: any) {}
}

export type StudentsActions =
    | LoadStudents
    | StudentsLoadingSuccess
    | StudentsLoadingFailed
    | DeleteStudent
    | StudentDeletingSuccess
    | StudentDeletingFiled;
