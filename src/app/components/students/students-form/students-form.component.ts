import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Store } from '@ngxs/store';
import { StudentsActions } from '../students.actions';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: [
    '/src/app/styles/global/form.scss',
    './students-form.component.scss'
  ]
})
export class StudentsFormComponent {
  public studentForm: FormGroup = this.fb.group({
    'name': ['', Validators.required],
    'lastName': ['', Validators.required],
    'address': [''],
    'description': ['']
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) { }

  public onSubmit(): void {
    this.store.dispatch(new StudentsActions.Add(this.studentForm.value ));
    // this.journalDataAddStudentSub = this.journalDataService.addStudent(this.studentForm.value).subscribe(() => {
    this.router.navigate([`/${JournalRoutes.Students}`, JournalRoutes.Table]);
    // });
  }
}
