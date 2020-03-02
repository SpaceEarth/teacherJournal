import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import { StudentSubject } from 'src/app/common/entities/subjectViewModel';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { JournalReqDataService } from 'src/app/services/journal-req-data.service';
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
    private journalReqDataService: JournalReqDataService,
  ) {}

  public ngOnInit(): void {
    this.studentSubjects = this.journalReqDataService.getSubjectData();
  }

  public getSubjectRouterLink(id: number): string | any[] {
    return [`/${JournalRoutes.Subjects}`, JournalRoutes.Table, id];
  }
}
