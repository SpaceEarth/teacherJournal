import { Subject } from './subject';

export interface Student {
    id: number
    name: string
    lastName: string
    marks: Array<{
        subject: Subject
        date: Date
        mark?: number
    }>
    averageMark?: number
    addres?: string
    description?: string
}