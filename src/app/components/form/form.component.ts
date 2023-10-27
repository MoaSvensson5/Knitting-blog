import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() image: string = '';
  @Input() formTitle: string = '';
  @Input() inputFields: any[] = [];
  @Input() buttonText: string = '';
  @Input() textarea: { name: string; placeholder: string } = {
    name: '',
    placeholder: '',
  };

  inputData: { [key: string]: any } = {};

  @Output() submittedForm = new EventEmitter<{ [key: string]: any }>();

  onSubmit() {
    this.submittedForm.emit(this.inputData);
    this.inputData={};
  }
}
