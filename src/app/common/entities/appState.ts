import { Student } from './student';
import { StudentSubject } from './studentSubject';
import { AppStore } from './appStore';

export class AppState {
    public [AppStore.Students]: Student[];
    public [AppStore.StudentsSubjects]: StudentSubject[];
}
