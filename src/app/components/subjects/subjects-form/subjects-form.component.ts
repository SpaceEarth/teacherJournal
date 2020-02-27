import { Component } from '@angular/core';

@Component({
  selector: 'app-subjects-form',
  templateUrl: './subjects-form.component.html',
  styleUrls: ['./subjects-form.component.scss']
})
export class SubjectsFormComponent {
  public formFields: Array<string> = ['* Name', '* Teacher', 'Cabiner', 'Description'];
}
