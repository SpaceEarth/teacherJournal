import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { SubjectTableViewModel } from 'src/app/components/subjects/subjects-table/subjects-table.component';
import { Student } from 'src/app/common/entities/student';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { StudentService } from '../student/student.service';

@Injectable({
  providedIn: 'root'
})
export class JournalTableService {

  constructor(
    private studentService: StudentService
  ) {}

  public getSubjectTableViewModel(
      students$: Observable<Student[]>,
      studentSubject$: Observable<StudentSubject>
    ): Observable<SubjectTableViewModel[]> {

    return forkJoin([
      students$,
      studentSubject$
    ]).pipe(
      map(([students, studentSubject]) => {
        return students.map((student) => {
          const studentId: number = student.id;
          const subjectTableViewModel: SubjectTableViewModel = {
            name: student.name,
            lastName: student.lastName,
            averageMark: this.studentService.getAverageMark(studentSubject.journal, studentId)
          };

          for (let date of Object.keys(studentSubject.journal || [])) {
            const mark: number | undefined = studentSubject.journal[date][studentId];
            subjectTableViewModel[date] = mark;
          }

          return subjectTableViewModel;
        });
      })
    );
  }
}
