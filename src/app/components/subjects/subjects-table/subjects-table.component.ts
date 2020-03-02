import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { ActivatedRoute } from '@angular/router';
import { StudentSubject } from 'src/app/common/entities/studentSubject';
import { JournalReqDataService } from 'src/app/services/journal-req-data.service';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.scss']
})
export class SubjectsTableComponent implements OnInit {
  public studentSubject: Observable<StudentSubject>;
  public students: Observable<Student[]>;
  public columns: string[];

  constructor(
    private route: ActivatedRoute,
    private journalReqDataService: JournalReqDataService
  ) { }

  public ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.studentSubject = this.journalReqDataService
      .getSubjectData()
      .pipe(
        // delay(1000),
        map((arr) => {
          return arr.find(el => el.id === id);
        })
      );
    this.students = this.journalReqDataService.getStudentsData();
    this.columns = ['name', 'lastName', 'averageMark'];
  }

}
