import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { students } from 'src/app/common/constants/constants-students';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Observable } from 'rxjs';
import { JournalReqDataService } from 'src/app/services/journal-req-data.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  public students: Observable<Student[]>;
  public columns: string[] = [];
  public routerLinkConfig: {[key: string]: string | any[]} = {
    addNewUser: [`/${JournalRoutes.Students}`, JournalRoutes.Form],
  };

  constructor(
    private journalReqDataService: JournalReqDataService
  ) {}

  public ngOnInit(): void {
    this.students = this.journalReqDataService.getStudentsData();
    this.columns = ['id', 'name', 'lastName', 'addres', 'description'];
  }

}
