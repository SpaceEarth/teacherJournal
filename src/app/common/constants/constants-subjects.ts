import { StudentSubject, Journal } from '../entities/studentSubject';

const journalChemistry: Journal = {
    '22/10': {'1': 9, '2': 5, '5': 8},
    '23/10': { '2': 2, '3': 3, '4': 10, '5': 8}
};
const journalBiology: Journal = {
    '22/10': {'1': 10, '3': 10, '5': 8},
    '23/10': {'1': 9},
    '24/10': {'1': 5, '2': 7, '3': 6},
    '25/10': {'1': 2, '2': 8},
};
const journalLiterature: Journal = {
    '22/10': {'1': 4, '3': 2, '5': 8},
    '23/10': {'1': 9, '2': 8},
    '24/10': {'1': 10, '3': 4, '5': 8}
};

export const studentSubjects: Array<StudentSubject> = [
    new StudentSubject(1, 'Physics', 'Agls Yljassdf'),
    new StudentSubject(2, 'Chemistry', 'Frkjle Kgkrgjl', journalChemistry, 'B3.1', 'subject ++'),
    new StudentSubject(3, 'Biology', 'Frkjle Kgkrgjl', journalBiology, 'B3.1', 'subject ++'),
    new StudentSubject(4, 'Literature', 'Frkjle Kgkrgjl', journalLiterature, 'B3.1', 'subject ++'),
];
