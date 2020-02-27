import { Component } from '@angular/core';
import { FormConfig } from 'src/app/shared/components/form/form.component';

@Component({
  selector: 'app-subjects-form',
  templateUrl: './subjects-form.component.html',
  styleUrls: ['./subjects-form.component.scss']
})
export class SubjectsFormComponent {
  public formFieldsConfig: Array<FormConfig> = [
    new FormConfig('* Name', true),
    new FormConfig('* Teacher', true),
    new FormConfig('Cabiner', false),
    new FormConfig('Description', false)
  ];
}
