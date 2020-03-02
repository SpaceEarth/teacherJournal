import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subjects-form',
  templateUrl: './subjects-form.component.html',
  styleUrls: [
    '/src/app/styles/global/form.scss',
    './subjects-form.component.scss'
  ]
})
export class SubjectsFormComponent {
  public studentForm: FormGroup = this.fb.group({
    'name': ['', Validators.required],
    'teacher': ['', Validators.required],
    'cabiner': [''],
    'description': ['']
  });

  constructor(
    private fb: FormBuilder
  ) {}

  public onSubmit(): void {
    console.log(this.studentForm.value);
  }

}
