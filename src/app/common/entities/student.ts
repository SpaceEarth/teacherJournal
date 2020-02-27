import { StudentLessonStatistics } from './studentLessonStatistics';

export class StudentViewModel {

    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public studentLessonStatistics: Array<StudentLessonStatistics>,
        public addres?: string,
        public description?: string,
    ) { }

    private static formatMarks(lessonsStat: Array<StudentLessonStatistics>): number | undefined {
        const marks: Array<number> = lessonsStat
            .filter((el) => el.hasOwnProperty('mark') && el.mark !== undefined)
            .map((el) => el.mark);

        if (marks.length > 0) {
            return marks.reduce((acc, el) => acc + el, 0) / marks.length;
        }
    }

    public get averageMark(): number | undefined {
        return StudentViewModel.formatMarks(this.studentLessonStatistics);
    }

}
