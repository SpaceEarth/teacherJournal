import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() instance: string = ""
	@Input() formFields: Array<string> = []
	@Input() submitName: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(formData) {
		
  }

}
