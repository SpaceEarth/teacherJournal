import { StudentSubject } from './subjectViewModel';

export class StudentLessonStatistics {

    constructor(
        public subject: StudentSubject,
        public date: Date,
        public mark?: number
    ) {}
}
