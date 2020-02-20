import { StudentLessonStatistics } from './studentLessonStatistics';

export interface Student {
    id: number
    name: string
    lastName: string
    studentLessonStatistics: Array<StudentLessonStatistics>
    averageMark?: number
    addres?: string
    description?: string
}