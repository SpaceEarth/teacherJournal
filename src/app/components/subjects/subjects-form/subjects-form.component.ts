import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JournalDataService } from 'src/app/services/journal-data.service';

@Component({
  selector: 'app-subjects-form',
  templateUrl: './subjects-form.component.html',
  styleUrls: [
    '/src/app/styles/global/form.scss',
    './subjects-form.component.scss'
  ]
})
export class SubjectsFormComponent {
  public subjectForm: FormGroup = this.fb.group({
    'name': ['', Validators.required],
    'teacher': ['', Validators.required],
    'cabiner': [''],
    'description': ['']
  });

  constructor(
    private fb: FormBuilder,
    private journalDataService: JournalDataService
  ) {}

  public onSubmit(): void {
    console.log(this.subjectForm.value);
    this.subjectForm.reset();
  }

}
