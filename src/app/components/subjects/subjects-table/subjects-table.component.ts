import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { ActivatedRoute } from '@angular/router';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { Observable, of, combineLatest } from 'rxjs';
import { JournalTableService } from 'src/app/services/journalTable/journal-table.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/common/entities/appState';
import { AppStore } from 'src/app/common/entities/appStore';
import { loadStudentsSubjects, addStudentSubjectDate } from '../subjects.actions';
import { switchMap, first } from 'rxjs/operators';
import { getStudentSubjectById, studentSubjectsDates } from '../subjects.selectors';
import { loadStudents } from '../../students/students.actions';

enum SubjFields {
  name = 'name',
  lastName = 'lastName',
  averageMark = 'averageMark',
  datesWithMarks = 'datesWithMarks'
}

export interface SubjectTableViewModel {
  [SubjFields.name]: string;
  [SubjFields.lastName]: string;
  [SubjFields.averageMark]: number | undefined;
}

export interface ISortConfig {
  sortPath: string[];
  direction: boolean;
}

@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.scss']
})
export class SubjectsTableComponent implements OnInit {
  public id: number;
  public subj: typeof SubjFields = SubjFields;
  public sortConfig: ISortConfig = { sortPath: [], direction: true };
  public dates$: Observable<string[]>;
  public columns$: Observable<string[]>;
  public students$: Observable<Student[]>;
  public studentSubject$: Observable<StudentSubject>;
  public subjectTableViewModel$: Observable<SubjectTableViewModel[]>;

  constructor(
    private route: ActivatedRoute,
    private store$: Store<AppState>,
    private journalTableService: JournalTableService
  ) { }

  public ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.store$.dispatch(loadStudents({ searchKey: '' }));
    this.store$.dispatch(loadStudentsSubjects());
    this.dates$ = this.store$.pipe(select(studentSubjectsDates, { id: this.id }));
    this.students$ = this.store$.select(AppStore.Students);
    this.studentSubject$ = this.store$.pipe(select(getStudentSubjectById, { id: this.id }));

    this.subjectTableViewModel$ = this.journalTableService.getSubjectTableViewModel(this.students$, this.studentSubject$);
    this.columns$ = this.subjectTableViewModel$.pipe(
      switchMap((subjVM) => {
        return of([...Object.keys(subjVM[0] || {})]);
      })
    );
  }

  public avrgMarkField(field: string): boolean {
    return field === SubjFields.averageMark;
  }

  public onAddDate(): void {
    const date: string = prompt('Enter new date', '31/01');

    combineLatest(
      this.dates$,
      this.studentSubject$
    ).pipe(first()).subscribe(([dates, studentSubject]) => {

      if (!date || dates.findIndex(el => el === date) !== -1) {
        console.error('incorrect date');
        return;
      }

      this.store$.dispatch(addStudentSubjectDate({ id: this.id, date, studentSubject }));
    });
  }

  public onHeadClick(sortPath: string[]): void {
    let configSortPath: string[] = this.sortConfig.sortPath;
    let direction: boolean = this.sortConfig.direction;

    if (this.sortConfig.sortPath.join() === sortPath.join()) {
      direction = !this.sortConfig.direction;
    } else {
      configSortPath = sortPath;
    }

    this.sortConfig = {
      direction,
      sortPath: configSortPath
    };
  }
}
