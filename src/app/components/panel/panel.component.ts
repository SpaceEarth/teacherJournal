import { Component } from '@angular/core';
import { RouteConfig as R } from 'src/app/common/enums/router.enum';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  public links: Array<string> = [R.Students, R.Subjects, R.Statistics, R.Export];
}
