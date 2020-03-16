import { Student } from './student';
import { StudentSubject } from './studentSubject';
import { AppStore } from './appStore';

export interface AppState {
    [AppStore.Students]: Student[];
    [AppStore.StudentsSubjects]: StudentSubject[];
}
