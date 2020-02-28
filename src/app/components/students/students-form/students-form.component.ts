import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormConfig } from 'src/app/common/entities/formConfig';

@Component({
  selector: 'app-students-form',
  templateUrl: '/src/app/templates/global/form.html',
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
  public formFieldsConfig: FormConfig[] = [
    new FormConfig('name', 'name', true),
    new FormConfig('lastName', 'last name', true),
    new FormConfig('address', 'address', false)
  ];
  public instance: string = 'student';

  constructor(
    private fb: FormBuilder
  ) {}

  public onSubmit(): void {
    console.log(this.studentForm.value);
  }

}
