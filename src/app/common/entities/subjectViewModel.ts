export class SubjectViewModel {

    constructor(
        public id: number,
        public name: string,
        public teacher: string,
        public cabiner?: string,
        public description?: string,
    ) { }

}
