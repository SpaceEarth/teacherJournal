import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { students } from 'src/app/common/constants/constants-students';
import { JournalRoutes } from 'src/app/common/enums/router.enum';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  public students: Array<Student> = [];
  public columns: Array<string> = [];
  public routerLinkConfig: {[key: string]: string | any[]} = {
    addNewUser: [`/${JournalRoutes.Students}`, JournalRoutes.Form],
  };

  public ngOnInit(): void {
    this.students = students;
    this.columns = ['id', 'name', 'lastName', 'addres', 'description'];
  }

}
