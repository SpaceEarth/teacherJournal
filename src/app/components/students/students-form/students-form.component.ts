import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent implements OnInit {
  public formFields: Array<string> = [];

  public ngOnInit(): void {
    this.formFields = ['* Name', '* Last Name', 'Address', 'Description'];
  }

}
