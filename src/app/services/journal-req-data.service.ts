import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Student } from '../common/entities/student';
import { StudentSubject } from '../common/entities/subjectViewModel';
import { students } from '../common/constants/constants-students';
import { studentSubjects } from '../common/constants/constants-subjects';

@Injectable({
  providedIn: 'root'
})

export class JournalReqDataService {
  public studentsUrl: string = 'studetns.json';
  public subjectsUrl: string = 'subjects.json';

  constructor(
    private http: HttpClient
  ) { }

  public getStudentsData(): Observable<Student[]> {
    // try get from localStorage
    // return this.http.get<Student[]>(this.studentsUrl);
    return of(students);
  }

  public getSubjectData(): Observable<StudentSubject[]> {
    // try get from localStorage
    // return this.http.get<StudentSubject[]>(this.subjectsUrl);
    return of(studentSubjects);
  }
}