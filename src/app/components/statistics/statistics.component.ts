import { Component } from '@angular/core';
import { RouteConfig as R, OutletConfig as O } from 'src/app/common/enums/router.enum';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  public routerLinkConfig: {[key: string]: string | any[]} = {
    students:  [`/${R.Statistics}`, { outlets: { [O.StatisticList]: [R.Students] } }],
    subjects: [`/${R.Statistics}`, { outlets: { [O.StatisticList]: [R.Subjects] } }],
  };
}
