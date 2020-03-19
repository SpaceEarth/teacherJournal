import { Student } from 'src/app/common/entities/student';

export namespace StudentsActions {
    export class Load {
        public static readonly type: string = '[Students] Load Students';

        constructor(public searchKey: string) { }
    }

    export class LoadingSuccess {
        public static readonly type: string = '[Students] Students Loading Success';

        constructor(public students: Student[]) { }
    }

    export class LoadingFailed {
        public static readonly type: string = '[Students] Students Loading Failed';

        constructor(public error: any) { }
    }

    export class Delete {
        public static readonly type: string = '[Students] Delete Student';

        constructor(public id: number) { }
    }

    export class DeletingSuccess {
        public static readonly type: string = '[Students] Students Deleting Success';

        constructor(public students: Student[]) { }
    }

    export class DeletingFiled {
        public static readonly type: string = '[Students] Students Deleting Failed';

        constructor(public error: any) { }
    }

    export class Add {
        public static readonly type: string = '[Students] Add Student';

        constructor(public student: Student) { }
    }

    export class AddingSuccess {
        public static readonly type: string = '[Students] Students Adding Success';

        constructor(public student: Student) { }
    }

    export class AddingFiled {
        public static readonly type: string = '[Students] Students Adding Failed';

        constructor(public error: any) { }
    }
}
