import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder
  ) {}

  public onSubmit(): void {
    console.log(this.studentForm.value);
  }

}
