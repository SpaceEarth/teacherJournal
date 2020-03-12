import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Observable, fromEvent } from 'rxjs';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { pluck, debounceTime, distinctUntilChanged, switchMap, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements AfterViewInit {
  @ViewChild('searchBar')
  private input: ElementRef;
  public columns$: Observable<string[]>;
  public students$: Observable<Student[]>;
  public routerLinkConfig: { [key: string]: string | any[] } = {
    addNewUser: [`/${JournalRoutes.Students}`, JournalRoutes.Form],
  };

  constructor(
    private journalDataService: JournalDataService
  ) { }

  public ngOnInit(): void {
    this.columns$ = this.journalDataService.getStudentsData().pipe(
      map((value) => {
        value = value || [];
        return Object.keys(value[0] || {});
      })
    );
  }

  public ngAfterViewInit(): void {
    this.students$ = fromEvent(this.input.nativeElement, 'input')
      .pipe(
        pluck('target', 'value'),
        startWith(''),
        debounceTime(100),
        distinctUntilChanged(),
        switchMap((searchKey) => this.journalDataService.getStudentsData()
          .pipe(
            map(
              data => data.filter(
                student => student.lastName.toLowerCase().startsWith((<string>searchKey).toLowerCase())
              )
            )
          )
        )
      );
  }

  public onClickDeleteUser(student: Student): void {
    const submit: boolean = confirm(`Delete ${student.name} ${student.lastName}?`);

    if (!submit) {
      return;
    }

    this.students$ = this.journalDataService.deleteStudentById(student.id);
  }
}
