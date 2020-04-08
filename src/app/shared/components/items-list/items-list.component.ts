import { Component, Input } from '@angular/core';
import { ItemsList } from 'src/app/common/entities/items-list';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  @Input() public items: Array<ItemsList> = [];
  @Input() public instanceLink: string = '';

}
