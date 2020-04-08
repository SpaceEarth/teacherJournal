import { Component, OnInit } from '@angular/core';
import { ItemsList } from 'src/app/common/entities/items-list';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Observable } from 'rxjs';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  public subjectList: Observable<ItemsList[]>;
  public instanceLink: string = JournalRoutes.Subjects;

  constructor(
    private journalDataService: JournalDataService
  ) {}

  public ngOnInit(): void {
    this.subjectList = this.journalDataService
      .getSubjectData()
      .pipe(
        map(arr => {
          return arr.map(el => {
            return {
              id: el.id,
              name: el.name,
            };
          });
        })
      );
  }

}
