import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() public instance: string = '';
  @Input() public formFields: Array<string> = [];
  @Input() public submitName: string = '';
  @Output() public formData: EventEmitter<Object> = new EventEmitter<Object>();

  public onClickSubmit(formData: object): void {
    this.formData.emit(formData);
  }

}
