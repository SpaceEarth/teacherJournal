import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() instance: string = "";
	@Input() formFields: Array<string> = [];
	@Input() submitName: string = "";
  @Output() formData: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(formData) {
		this.formData.emit(formData);
  }
}
