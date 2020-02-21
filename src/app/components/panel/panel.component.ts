import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  links: Array<string> = ['students', 'subjects', 'statistics', 'export']
  
  constructor() { }

  ngOnInit(): void {
  }

}
