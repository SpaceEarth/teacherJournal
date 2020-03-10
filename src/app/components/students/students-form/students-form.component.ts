import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { JournalRoutes } from 'src/app/common/enums/router.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: [
    '/src/app/styles/global/form.scss',
    './students-form.component.scss'
  ]
})
export class StudentsFormComponent implements OnDestroy {
  private journalDataAddStudentSub: Subscription;
  public studentForm: FormGroup = this.fb.group({
    'name': ['', Validators.required],
    'lastName': ['', Validators.required],
    'address': [''],
    'description': ['']
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private journalDataService: JournalDataService
  ) {}

  public onSubmit(): void {
    this.journalDataAddStudentSub = this.journalDataService.addStudent(this.studentForm.value).subscribe(() => {
      this.router.navigate([`/${JournalRoutes.Students}`, JournalRoutes.Table]);
    });
  }

  public ngOnDestroy(): void {
    if (this.journalDataAddStudentSub) {
      this.journalDataAddStudentSub.unsubscribe();
    }
  }

}
