import { Action } from '@ngrx/store';
import { Student } from 'src/app/common/entities/student';

export enum StudentsActionTypes {
    LoadStudents = '[Students] Load Students',
    StudentsLoadingSuccess = '[Students] Students Loading Success',
    StudentsLoadingFailed = '[Students] Students Loading Failed',
    GetColumns = '[Students] Get Columns',
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

export class GetColumns implements Action {
    public readonly type: StudentsActionTypes = StudentsActionTypes.GetColumns;
}

export type StudentsActions =
    | LoadStudents
    | StudentsLoadingSuccess
    | StudentsLoadingFailed
    | GetColumns;
