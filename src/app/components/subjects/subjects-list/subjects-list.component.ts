import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { Observable, Subject, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit, OnDestroy {
  public studentSubjectsSub: Subscription;
  public studentSubjects: StudentSubject[];
  public studentSubjects$: Observable<StudentSubject[]>;
  public deleteSubjectByIdSub: Subscription;
  public routerLinkConfig: {[key: string]: string | any[]} = {
    addNewSubject: [`/${JournalRoutes.Subjects}`, JournalRoutes.Form],
  };

  constructor(
    private journalDataService: JournalDataService,
  ) {}

  public ngOnInit(): void {
    this.studentSubjects$ = this.journalDataService.getSubjectData();
    this.studentSubjectsSub = this.studentSubjects$.subscribe(data => {
      this.studentSubjects = data;
    });
  }

  public ngOnDestroy(): void {
    this.studentSubjectsSub.unsubscribe();
    if (this.deleteSubjectByIdSub) {
      this.deleteSubjectByIdSub.unsubscribe();
    }
  }

  public getSubjectRouterLink(id: number): string | any[] {
    return [`/${JournalRoutes.Subjects}`, JournalRoutes.Table, id];
  }

  public onDeleteSubject(e: Event, subject: StudentSubject): void {
    const submit: boolean = confirm(`Delete ${subject.name}?`);

    if (submit) {
      this.deleteSubjectByIdSub = this.journalDataService.deleteSubjectById(subject.id).subscribe(() => {
        this.studentSubjects = this.studentSubjects.filter(subj => {
          return subj.id !== subject.id;
        });
      });
    }
    e.stopPropagation();
  }
}
