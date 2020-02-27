import { StudentViewModel } from '../entities/student';
import { subjects } from './constants-subjects';
import { StudentLessonStatistics } from '../entities/studentLessonStatistics';

const marks: Array<StudentLessonStatistics> = [
    new StudentLessonStatistics(subjects[0], new Date(2020, 2, 20), 10),
    new StudentLessonStatistics(subjects[0], new Date(2020, 2, 21)),
    new StudentLessonStatistics(subjects[1], new Date(2020, 2, 19), 8)
];

const marks2: Array<StudentLessonStatistics> = [
    new StudentLessonStatistics(subjects[0], new Date(2020, 2, 20), 5),
    new StudentLessonStatistics(subjects[0], new Date(2020, 2, 21)),
    new StudentLessonStatistics(subjects[0], new Date(2020, 2, 19), 8),
    new StudentLessonStatistics(subjects[0], new Date(2020, 2, 23), 8)
];

export const students: Array<StudentViewModel> = [
    new StudentViewModel(1, 'Aleksey', 'Yasyuchenya', marks , 'str.Ygkdjsgsj, 93', 'student'),
    new StudentViewModel(2, 'Kirill', 'Udslkgfj', marks2 , 'str.Ghfdd, 345', 'student'),
    new StudentViewModel(3, 'Gdfgreh', 'Udslkgfj', marks2 , 'str.Ghfdd, 345', 'student'),
    new StudentViewModel(4, 'Argree', 'Udslkgfj', marks2 , 'str.Ghfdd, 345', 'student'),
    new StudentViewModel(5, 'Brfgreg', 'Udslkgfj', marks2 , 'str.Ghfdd, 345', 'student')
];
