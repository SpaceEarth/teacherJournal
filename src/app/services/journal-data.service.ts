import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../common/entities/student';
import { StudentSubject } from '../common/entities/studentSubject';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JournalDataService {
  public studentsUrl: string = 'http://localhost:3004/students';
  public subjectsUrl: string = 'http://localhost:3004/subjects';
  public studentData$: Observable<Student[]>;
  public studentSubjectData$: Observable<StudentSubject[]>;

  constructor(
    private http: HttpClient
  ) { }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student);
  }

  public deleteStudentById(id: number): Observable<Student> {
    const url: string = `${this.studentsUrl}/${id}`;
    return this.http.delete<Student>(url);
  }

  public getStudentsData(): Observable<Student[]> {
    // try get from localStorage

    if (!this.studentData$) {
      this.studentData$ = this.http
        .get<Student[]>(this.studentsUrl)
        .pipe(
          share()
        );
    }
    return this.studentData$;
  }

  public addSubject(subject: StudentSubject): Observable<StudentSubject> {
    return this.http.post<StudentSubject>(this.subjectsUrl, subject);
  }

  public addSubjectDate(id: number, subjectData: StudentSubject, date: string): Observable<Object> {
    const url: string = `${this.subjectsUrl}/${id}`;
    const data: StudentSubject = {...subjectData};

    if (!data.journal) {
      data.journal = {};
    }
    data.journal[date] = {};

    return this.http.put(url, data);
  }

  public getSubjectData(): Observable<StudentSubject[]> {
    // try get from localStorage

    if (!this.studentSubjectData$) {
      this.studentSubjectData$ = this.http
        .get<StudentSubject[]>(this.subjectsUrl)
        .pipe(
          share()
        );
    }
    return this.studentSubjectData$;
  }

  public deleteSubjectById(id: number): Observable<StudentSubject> {
    const url: string = `${this.subjectsUrl}/${id}`;

    return this.http.delete<StudentSubject>(url);
  }

  public getSubjectById(id: number): Observable<StudentSubject> {
    return this.getSubjectData()
      .pipe(
        map((arr) => {
          return arr.find(el => el.id === id);
        })
      );
  }
}
