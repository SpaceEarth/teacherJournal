import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { ActivatedRoute } from '@angular/router';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { Observable, Subscription } from 'rxjs';
import { JournalTableService } from 'src/app/services/journalTable/journal-table.service';

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
  [SubjFields.datesWithMarks]: {[key: string]: number};
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
  public dates: string[];
  public subj: typeof SubjFields = SubjFields;
  public columns: string[] = [SubjFields.name, SubjFields.lastName, SubjFields.averageMark];
  public sortConfig: ISortConfig = {sortPath: [], direction: true};
  public students$: Observable<Student[]>;
  public studentSubject$: Observable<StudentSubject>;
  public subjectTableViewModel$: Observable<SubjectTableViewModel[]>;

  constructor(
    private route: ActivatedRoute,
    private journalDataService: JournalDataService,
    private journalTableService: JournalTableService
  ) {}

  public ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.studentSubject$ = this.journalDataService.getSubjectById(id);
    this.students$ = this.journalDataService.getStudentsData();
    this.subjectTableViewModel$ = this.journalTableService.getSubjectTableViewModel(this.students$, this.studentSubject$);
    this.subscriptions.push(
      this.subjectTableViewModel$.subscribe((data) => {
        this.dates = Object.keys(
          (data[0] && data[0].datesWithMarks) || []
        );
        this.columns = this.columns.concat(this.dates);
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public avrgMarkField(field: string): boolean {
    return field === 'averageMark';
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
