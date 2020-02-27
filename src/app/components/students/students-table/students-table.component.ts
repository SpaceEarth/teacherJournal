import { Component, OnInit } from '@angular/core';
import { StudentViewModel } from 'src/app/common/entities/student';
import { students } from 'src/app/common/constants/constants-students';
import { RouteConfig as R } from 'src/app/common/enums/router.enum';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  public students: Array<StudentViewModel> = [];
  public columns: Array<string> = [];
  public routerLinkConfig: {[key: string]: string | any[]} = {
    addNewUser: [`/${R.Students}`, R.Form],
  };

  public ngOnInit(): void {
    this.students = students;
    this.columns = ['id', 'name', 'lastName', 'addres', 'description'];
  }

}
