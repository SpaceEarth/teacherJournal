import { Component, Input, Output, EventEmitter } from '@angular/core';

export class FormConfig {

  constructor(
    public name: string,
    public required: boolean
  ) {}

}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() public instance: string = '';
  @Input() public formFieldsConfig: Array<FormConfig> = [];
  @Input() public submitName: string = '';
  @Output() public formData: EventEmitter<Object> = new EventEmitter<Object>();

  public onClickSubmit(formData: object): void {
    this.formData.emit(formData);
    console.log(formData);
  }

}
