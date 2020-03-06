import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Observable } from 'rxjs';
import { JournalDataService } from 'src/app/services/journal-data.service';

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
    private journalDataService: JournalDataService
  ) {}

  public ngOnInit(): void {
    this.students = this.journalDataService.getStudentsData();
    this.columns = ['id', 'name', 'lastName', 'address', 'description'];
  }

}
