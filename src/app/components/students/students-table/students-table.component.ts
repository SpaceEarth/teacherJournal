import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { pluck, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';
import { StudentsActions } from '../students.actions';
import { StudentState } from '../students.state';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements AfterViewInit, OnDestroy {
  @ViewChild('searchBar')
  private input: ElementRef;

  @Select(StudentState.getStudentColumns)
  public columns$: Observable<string[]>;

  @Select(StudentState.getStudents)
  public students$: Observable<Student[]>;

  public serachBarInputSub: Subscription;
  public routerLinkConfig: { [key: string]: string | any[] } = {
    addNewUser: [`/${JournalRoutes.Students}`, JournalRoutes.Form],
  };

  constructor(
    private store: Store
  ) { }

  public ngAfterViewInit(): void {
    this.serachBarInputSub = fromEvent(this.input.nativeElement, 'input')
      .pipe(
        pluck('target', 'value'),
        startWith(''),
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe((searchKey: string) => {
        this.store.dispatch(new StudentsActions.Load(searchKey));
      });
  }

  public ngOnDestroy(): void {
    this.serachBarInputSub.unsubscribe();
  }

  public onClickDeleteUser(student: Student): void {
    const submit: boolean = confirm(`Delete ${student.name} ${student.lastName}?`);

    if (!submit) {
      return;
    }

    this.store.dispatch(new StudentsActions.Delete(student.id));
  }
}
