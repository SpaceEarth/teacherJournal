import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JournalDataService } from 'src/app/services/journal-data.service';

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
    private journalDataService: JournalDataService
  ) {}

  public onSubmit(): void {
    this.journalDataService.addStudent(this.studentForm.value);
    this.studentForm.reset();
  }

}
