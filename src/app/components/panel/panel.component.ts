import { Component } from '@angular/core';
import { JournalRoutes } from 'src/app/common/enums/router.enum';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  public links: Array<string> = [
    JournalRoutes.Students,
    JournalRoutes.Subjects,
    JournalRoutes.Statistics,
    JournalRoutes.Export
  ];
}
