import { Component, OnInit } from '@angular/core';
import { ItemsList } from 'src/app/common/entities/items-list';
import { students } from 'src/app/common/constants/constants-students';
import { RouteConfig as R} from 'src/app/common/enums/router.enum';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public studentList: Array<ItemsList> = [];
  public instanceLink: string = R.Students;

  public ngOnInit(): void {
    this.studentList = students.map(el => {
      return {
        id: el.id,
        name: `${el.name} ${el.lastName}`,
      };
    });
  }
}
