import { Student } from '../entities/student';
import { studentSubjects } from './constants-subjects';
import { StudentLessonStatistics } from '../entities/studentLessonStatistics';

const marks: StudentLessonStatistics[] = [
    new StudentLessonStatistics(studentSubjects[0], new Date(2020, 2, 20), 10),
    new StudentLessonStatistics(studentSubjects[0], new Date(2020, 2, 21)),
    new StudentLessonStatistics(studentSubjects[1], new Date(2020, 2, 19), 8)
];

const marks2: StudentLessonStatistics[] = [
    new StudentLessonStatistics(studentSubjects[0], new Date(2020, 2, 20), 5),
    new StudentLessonStatistics(studentSubjects[0], new Date(2020, 2, 21)),
    new StudentLessonStatistics(studentSubjects[0], new Date(2020, 2, 19), 8),
    new StudentLessonStatistics(studentSubjects[0], new Date(2020, 2, 23), 8)
];

export const students: Student[] = [
    new Student(1, 'Aleksey', 'Yasyuchenya', marks , 'str.Ygkdjsgsj, 93', 'student'),
    new Student(2, 'Kirill', 'Udslkgfj', marks2 , 'str.Ghfdd, 345', 'student'),
    new Student(3, 'Gdfgreh', 'Udslkgfj', marks2 , 'str.Ghfdd, 345', 'student'),
    new Student(4, 'Argree', 'Udslkgfj', marks2 , 'str.Ghfdd, 345', 'student'),
    new Student(5, 'Brfgreg', 'Udslkgfj', marks2 , 'str.Ghfdd, 345', 'student')
];
