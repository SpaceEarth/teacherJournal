import { Student } from "../entities/student";
import { subjects } from "./constants-subjects";
import { StudentLessonStatistics } from '../entities/studentLessonStatistics';

function getAverageMark(lessonsStat: Array<StudentLessonStatistics>) {
    const marks = lessonsStat
        .filter((el) => el.hasOwnProperty('mark'))
        .map((el) => el.mark);

    if (marks.length > 0) {
        return marks.reduce((acc, el) => acc + el, 0) / marks.length;
    }

    return null;  
}

export const students: Array<Student> = [
    {
        id: 1,
        name: "Aleksey",
        lastName: "Yasyuchenya",
        studentLessonStatistics: [{
            subject: subjects[0],
            date: new Date(2020, 2, 20),
            mark: 10
        }, {
            subject: subjects[0],
            date: new Date(2020, 2, 21),
        }, {
            subject: subjects[1],
            date: new Date(2020, 2, 19),
            mark: 8
        }
        ],
        get averageMark(): number {
            return getAverageMark(this.studentLessonStatistics);
        },
        addres: "str.Ygkdjsgsj, 93",
        description: "student",
    },
    {
        id: 1,
        name: "Aleksey",
        lastName: "Yasyuchenya",
        studentLessonStatistics: [{
            subject: subjects[0],
            date: new Date(2020, 2, 20),
            mark: 10
        }, {
            subject: subjects[0],
            date: new Date(2020, 2, 21),
        }, {
            subject: subjects[1],
            date: new Date(2020, 2, 19),
            mark: 8
        }
        ],
        get averageMark(): number {
            return getAverageMark(this.studentLessonStatistics);
        },
        addres: "str.Ygkdjsgsj, 93",
        description: "student",
    }
];