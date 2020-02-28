import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormConfig } from 'src/app/common/entities/formConfig';

@Component({
  selector: 'app-subjects-form',
  templateUrl: '/src/app/templates/global/form.html',
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
  public formFieldsConfig: FormConfig[] = [
    new FormConfig('name', 'name', true),
    new FormConfig('teacher', 'teacher', true),
    new FormConfig('cabiner', 'cabiner', false)
  ];
  public instance: string = 'subject';

  constructor(
    private fb: FormBuilder
  ) {}

  public onSubmit(): void {
    console.log(this.studentForm.value);
  }

}
