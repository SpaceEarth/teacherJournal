import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects-form',
  templateUrl: './subjects-form.component.html',
  styleUrls: ['./subjects-form.component.scss']
})
export class SubjectsFormComponent implements OnInit {
  formFields: Array<string> = ['* Name', '* Teacher', 'Cabiner', 'Description'];


  constructor() { }

  ngOnInit(): void {
  }

}
