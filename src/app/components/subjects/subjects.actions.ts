import { StudentSubject } from 'src/app/common/entities/studentSubject';

export namespace StudentsSubjectsAction {
    export class Load {
        public static readonly type: string = '[StudentsSubjects] Load StudentsSubjects';
    }

    export class LoadingSuccess {
        public static readonly type: string = '[StudentsSubjects] StudentsSubjects Loading Success';

        constructor(public studentsSubjects: StudentSubject[]) { }
    }

    export class LoadingFailed {
        public static readonly type: string = '[StudentsSubjects] StudentsSubjects Loading Failed';

        constructor(public error: any) { }
    }

    export class Delete {
        public static readonly type: string = '[StudentsSubjects] Delete StudentSubjects';

        constructor(public id: number) { }
    }

    export class DeletingSuccess {
        public static readonly type: string = '[StudentsSubjects] StudentsSubjects Deleting Success';

        constructor(public id: number) { }
    }

    export class DeletingFiled {
        public static readonly type: string = '[StudentsSubjects] StudentsSubjects Deleting Failed';

        constructor(public error: any) { }
    }

    export class Add {
        public static readonly type: string = '[Students] Add StudentSubject';

        constructor(public studentSubject: StudentSubject) { }
    }

    export class AddingSuccess {
        public static readonly type: string = '[Students] StudentsSubject Adding Success';

        constructor(public studentSubject: StudentSubject) { }
    }

    export class AddingFiled {
        public static readonly type: string = '[Students] StudentsSubject Adding Failed';

        constructor(public error: any) { }
    }

    export class AddDate {
        public static readonly type: string = '[Students] Add StudentSubject Date';

        constructor(
            public id: number,
            public date: string,
            public studentSubject: StudentSubject
        ) { }
    }

    export class DateAddingSuccess {
        public static readonly type: string = '[Students] StudentsSubject Date Adding Success';

        constructor(
            public id: number,
            public date: string
        ) { }
    }

    export class DateAddingFiled {
        public static readonly type: string = '[Students] StudentsSubject Date Adding Failed';

        constructor(public error: any) { }
    }
}
