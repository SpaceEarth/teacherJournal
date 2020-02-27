import { SubjectViewModel } from './subjectViewModel';

export class StudentLessonStatistics {

    constructor(
        public subject: SubjectViewModel,
        public date: Date,
        public mark?: number
    ) {}
}
