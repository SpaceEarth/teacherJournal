import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { ActivatedRoute } from '@angular/router';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { JournalReqDataService } from 'src/app/services/journal-req-data.service';
import { Observable, Subscription } from 'rxjs';
import { JournalTableService } from 'src/app/services/journalTable/journal-table.service';

export interface SubjectTableViewModel {
  name: string;
  lastName: string;
  averageMark: number | undefined;
  [key: string]: string | number | undefined;
}

@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.scss']
})
export class SubjectsTableComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public columns: string[];
  public students$: Observable<Student[]>;
  public studentSubject$: Observable<StudentSubject>;
  public subjectTableViewModel$: Observable<SubjectTableViewModel[]>;

  constructor(
    private route: ActivatedRoute,
    private journalReqDataService: JournalReqDataService,
    private journalTableService: JournalTableService
  ) {}

  public ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.studentSubject$ = this.journalReqDataService.getSubjectById(id);
    this.students$ = this.journalReqDataService.getStudentsData();
    this.subjectTableViewModel$ = this.journalTableService.getSubjectTableViewModel(this.students$, this.studentSubject$);
    this.subscriptions.push(
      this.subjectTableViewModel$.subscribe((data) => {
        this.columns = Object.keys(data[0] || []);
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
