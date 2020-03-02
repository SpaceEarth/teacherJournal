import { Component, OnInit } from '@angular/core';
import { ItemsList } from 'src/app/common/entities/items-list';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Observable } from 'rxjs';
import { JournalReqDataService } from 'src/app/services/journal-req-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public studentList: Observable<ItemsList[]>;
  public instanceLink: string = JournalRoutes.Students;

  constructor(
    private journalReqDataService: JournalReqDataService
  ) {}

  public ngOnInit(): void {
    this.studentList = this.journalReqDataService
      .getStudentsData()
      .pipe(
        map(arr => {
          return arr.map(el => {
            return {
              id: el.id,
              name: `${el.name} ${el.lastName}`,
            };
          });
        })
      );
  }
}
