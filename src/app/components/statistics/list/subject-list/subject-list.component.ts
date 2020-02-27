import { Component, OnInit } from '@angular/core';
import { ItemsList } from 'src/app/common/entities/items-list';
import { subjects } from 'src/app/common/constants/constants-subjects';
import { RouteConfig as R} from 'src/app/common/enums/router.enum';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  public subjectList: Array<ItemsList> = [];
  public instanceLink: string = R.Subjects;

  public ngOnInit(): void {
    this.subjectList = subjects.map(el => {
      return {
        id: el.id,
        name: el.name,
      };
    });
  }

}
