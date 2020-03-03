interface StudentMarks {
    [key: string]: number;
}

export interface Journal {
    [key: string]: StudentMarks;
}

export class StudentSubject {

    constructor(
        public id: number,
        public name: string,
        public teacher: string,
        public journal?: Journal,
        public cabiner?: string,
        public description?: string,
    ) {}

}
