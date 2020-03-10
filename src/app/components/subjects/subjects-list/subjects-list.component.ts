import { Component, OnInit } from '@angular/core';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {
  public studentSubjects: Observable<StudentSubject[]> ;
  public routerLinkConfig: {[key: string]: string | any[]} = {
    addNewSubject: [`/${JournalRoutes.Subjects}`, JournalRoutes.Form],
  };

  constructor(
    private journalDataService: JournalDataService,
  ) {}

  public ngOnInit(): void {
    this.studentSubjects = this.journalDataService.getSubjectData();
  }

  public getSubjectRouterLink(id: number): string | any[] {
    return [`/${JournalRoutes.Subjects}`, JournalRoutes.Table, id];
  }

  public onDeleteSubject(e: Event, id: number): void {
    e.stopPropagation();
    console.log(id);
  }
}
