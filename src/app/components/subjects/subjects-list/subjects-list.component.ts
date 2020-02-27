import { Component } from '@angular/core';
import { SubjectViewModel } from 'src/app/common/entities/subjectViewModel';
import { subjects } from 'src/app/common/constants/constants-subjects';
import { RouteConfig as R } from 'src/app/common/enums/router.enum';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent {
  public subjects: Array<SubjectViewModel> = subjects;
  public routerLinkConfig: {[key: string]: string | any[]} = {
    addNewSubject: [`/${R.Subjects}`, R.Form],
  };

}
