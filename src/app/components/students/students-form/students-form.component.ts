import { Component, OnInit } from '@angular/core';
import { FormConfig } from 'src/app/shared/components/form/form.component';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent implements OnInit {
  public formFieldsConfig: Array<FormConfig> = [];

  public ngOnInit(): void {
    this.formFieldsConfig = [
      new FormConfig('* Name', true),
      new FormConfig('* Last Name', true),
      new FormConfig('Address', false),
      new FormConfig('Description', false),
    ];
  }

}
