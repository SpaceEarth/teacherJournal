import { Component, OnInit, Input } from '@angular/core';
import { ItemsList } from 'src/app/common/entities/items-list';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() items: Array<ItemsList> = [];
  @Input() instanceLink: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
