import { Component } from '@angular/core';
import { JournalRoutes, JournalOutlets } from 'src/app/common/enums/router.enum';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  public routerLinkConfig: {[key: string]: string | any[]} = {
    students:  [`/${JournalRoutes.Statistics}`, { outlets: { [JournalOutlets.StatisticList]: [JournalRoutes.Students] } }],
    subjects: [`/${JournalRoutes.Statistics}`, { outlets: { [JournalOutlets.StatisticList]: [JournalRoutes.Subjects] } }],
  };
}
