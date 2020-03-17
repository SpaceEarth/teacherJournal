import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { ActivatedRoute } from '@angular/router';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { Observable, Subscription } from 'rxjs';
import { JournalTableService } from 'src/app/services/journalTable/journal-table.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/common/entities/appState';
import { AppStore } from 'src/app/common/entities/appStore';
import { loadStudentsSubjects } from '../subjects.actions';
import { map } from 'rxjs/operators';
import { getStudentSubjectById } from '../subjects.selectors';
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
  [SubjFields.datesWithMarks]: { [key: string]: number };
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
export class SubjectsTableComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public id: number;
  public dates: string[];
  public subjectData: StudentSubject;
  public subj: typeof SubjFields = SubjFields;
  public columns: string[] = [SubjFields.name, SubjFields.lastName, SubjFields.averageMark];
  public sortConfig: ISortConfig = { sortPath: [], direction: true };
  public students$: Observable<Student[]>;
  public studentSubject$: Observable<StudentSubject>;
  public subjectTableViewModel$: Observable<SubjectTableViewModel[]>;

  constructor(
    private route: ActivatedRoute,
    private store$: Store<AppState>,
    private journalDataService: JournalDataService,
    private journalTableService: JournalTableService
  ) { }

  public ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.store$.dispatch(loadStudentsSubjects());
    this.studentSubject$ = this.store$.pipe(select(getStudentSubjectById, { id: this.id }));
    this.subscriptions.push(
      this.studentSubject$
        .subscribe(subjectData => {
          this.subjectData = subjectData;
        })
    );
    this.store$.dispatch(loadStudents({ searchKey: '' }));
    this.students$ = this.store$.select(AppStore.Students);
    this.subjectTableViewModel$ = this.journalTableService.getSubjectTableViewModel(this.students$, this.studentSubject$);
    this.subscriptions.push(
      this.subjectTableViewModel$.subscribe((data) => {
        this.dates = Object.keys(
          (data[0] && data[0].datesWithMarks) || []
        );
        this.columns = Array.from(new Set(this.columns.concat(this.dates))); // TODO: optimize
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public avrgMarkField(field: string): boolean {
    return field === SubjFields.averageMark;
  }

  public onAddDate(): void {
    const date: string = prompt('Enter new date', '31/01');

    if (!date || this.dates.findIndex(el => el === date) !== -1) {
      console.error('incorrect date');
      return;
    }

    this.subscriptions.push(
      this.journalDataService.addSubjectDate(this.id, this.subjectData, date)
        .subscribe(data => {
          this.subjectData = <StudentSubject>data;
          // this.dates = Object.keys(
          //   (this.subjectTableViewModel[0] && this.subjectTableViewModel[0].datesWithMarks) || []
          // );

          this.columns = this.columns.concat(date);
        })
    );
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
