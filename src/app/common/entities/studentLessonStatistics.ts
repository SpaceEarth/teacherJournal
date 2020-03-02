import { StudentSubject } from './studentSubject';

export class StudentLessonStatistics {

    constructor(
        public subject: StudentSubject,
        public date: Date,
        public mark?: number
    ) {}
}
