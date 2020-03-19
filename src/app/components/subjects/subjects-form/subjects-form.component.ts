import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Store } from '@ngxs/store';
import { StudentsSubjectsAction } from '../subjects.actions';

@Component({
  selector: 'app-subjects-form',
  templateUrl: './subjects-form.component.html',
  styleUrls: [
    '/src/app/styles/global/form.scss',
    './subjects-form.component.scss'
  ]
})
export class SubjectsFormComponent {
  public journalDataAddSubjectSub: Subscription;
  public subjectForm: FormGroup = this.fb.group({
    'name': ['', Validators.required],
    'teacher': ['', Validators.required],
    'cabinet': [''],
    'description': ['']
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) { }

  public onSubmit(): void {
    this.store.dispatch(new StudentsSubjectsAction.Add({
      ...this.subjectForm.value,
      journal: {}
    }));
    // this.journalDataAddSubjectSub = this.journalDataService.addSubject({...this.subjectForm.value, journal: {}}).subscribe(data => {
    this.router.navigate([`/${JournalRoutes.Subjects}`, JournalRoutes.List]);
    // });
  }
}
