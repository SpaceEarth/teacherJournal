import { Component, Input } from '@angular/core';
import { Student } from 'src/app/common/entities/student';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() public data: Array<Student> = [];
  @Input() public displayedColumns: Array<String> = [];

}
