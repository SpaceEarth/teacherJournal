import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JournalDataService } from 'src/app/services/journal-data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { JournalRoutes } from 'src/app/common/enums/router.enum';

@Component({
  selector: 'app-subjects-form',
  templateUrl: './subjects-form.component.html',
  styleUrls: [
    '/src/app/styles/global/form.scss',
    './subjects-form.component.scss'
  ]
})
export class SubjectsFormComponent implements OnDestroy {
  public journalDataAddSubjectSub: Subscription;
  public subjectForm: FormGroup = this.fb.group({
    'name': ['', Validators.required],
    'teacher': ['', Validators.required],
    'cabiner': [''],
    'description': ['']
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private journalDataService: JournalDataService
  ) {}

  // take(1);
  public onSubmit(): void {
    this.journalDataAddSubjectSub = this.journalDataService.addSubject({...this.subjectForm.value, journal: {}}).subscribe(data => {
      this.router.navigate([`/${JournalRoutes.Subjects}`, JournalRoutes.List]);
    });
  }

  public ngOnDestroy(): void {
    if (this.journalDataAddSubjectSub) {
      this.journalDataAddSubjectSub.unsubscribe();
    }
  }

}
