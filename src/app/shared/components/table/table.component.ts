import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/common/entities/student';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: Array<Student>
  @Input() displayedColumns: Array<String>

  constructor() { }

  ngOnInit(): void {
  }

}
