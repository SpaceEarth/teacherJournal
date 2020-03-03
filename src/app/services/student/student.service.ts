import { Injectable } from '@angular/core';

import { Journal } from 'src/app/common/entities/studentSubject';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public getAverageMark(journal: Journal, id: number): number | undefined {
    const marks: number[] = [];

    for (let data of Object.keys(journal || {})) {
      if (journal[data][id]) {
        marks.push(journal[data][id]);
      }
    }

    return marks.length > 0 ? Math.round(marks.reduce((acc, v) => acc + v, 0) / marks.length * 10) / 10 : undefined;
  }

}
