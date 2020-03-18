import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { SubjectTableViewModel } from 'src/app/components/subjects/subjects-table/subjects-table.component';
import { Student } from 'src/app/common/entities/student';
import { StudentSubject, Journal } from 'src/app/common/entities/studentSubject';
import { StudentService } from '../student/student.service';

@Injectable({
  providedIn: 'root'
})
export class JournalTableService {

  constructor(
    private studentService: StudentService
  ) {}

  public transformToJournalTableViewModel({ id, name, lastName}: Student, journal: Journal): SubjectTableViewModel {
    const studentId: number = id;
    const subjectTableViewModel: SubjectTableViewModel = {
      name,
      lastName,
      averageMark: this.studentService.getAverageMark(journal, studentId)
    };

    for (let date of Object.keys(journal || [])) {
      const mark: number | undefined = journal[date][studentId];
      subjectTableViewModel[date] = mark;
    }

    return subjectTableViewModel;
  }

  public getSubjectTableViewModel(
      students$: Observable<Student[]>,
      studentSubject$: Observable<StudentSubject>
    ): Observable<SubjectTableViewModel[]> {

    return combineLatest(
      students$,
      studentSubject$
    ).pipe(
      map(([students, { journal } = { journal: {}}]) => {
        return students.map((student) => {
          return this.transformToJournalTableViewModel(student, journal);
        });
      })
    );
  }
}
