import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { pluck, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { deleteStudent, loadStudents } from '../students.actions';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/common/entities/appStore';

export interface AppState {
  students: Student[];
}

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchBar')
  private input: ElementRef;
  public columns$: Observable<string[]>;
  public students$: Observable<Student[]>;
  public serachBarInput$: Subscription;
  public routerLinkConfig: { [key: string]: string | any[] } = {
    addNewUser: [`/${JournalRoutes.Students}`, JournalRoutes.Form],
  };

  constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.students$ = this.store$.select(AppStore.Students);
    this.columns$ = this.store$.select(AppStore.Students)
      .pipe(
        map(
          (value = []) => Object.keys(value[0] || {})
        )
      );
  }

  public ngAfterViewInit(): void {
    this.serachBarInput$ = fromEvent(this.input.nativeElement, 'input')
      .pipe(
        pluck('target', 'value'),
        startWith(''),
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe((searchKey: string) => {
        this.store$.dispatch(loadStudents({ searchKey }));
      });
  }

  public ngOnDestroy(): void {
    this.serachBarInput$.unsubscribe();
  }

  public onClickDeleteUser(student: Student): void {
    const submit: boolean = confirm(`Delete ${student.name} ${student.lastName}?`);

    if (!submit) {
      return;
    }

    this.store$.dispatch(deleteStudent({ id: student.id }));
  }
}
