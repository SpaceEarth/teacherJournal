import { Subject } from './subject';

export interface StudentLessonStatistics {
    subject: Subject
    date: Date
    mark?: number
}