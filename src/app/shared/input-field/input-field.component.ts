import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent implements OnInit {
  @Input() textArea = false;
  @Input() type?: string;
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() control = new FormControl();
  @Output() inputChange = new EventEmitter();

  inputErrors: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onChange(e: any) {
    this.inputChange.emit(e);
    this.inputErrors = [];
  }

  onInputBlur() {
    if (this.control.errors) {
      Object.keys(this.control.errors).forEach((error) => {
        switch (error) {
          case 'minlength':
            this.inputErrors.push(this.label + ' is too short');
            break;
          case 'email':
            this.inputErrors.push('Please enter a valid email');
            break;
          case 'required':
            this.inputErrors.push(this.label + ' is required');
            break;
          default:
            break;
        }
      });
    }
    console.log(this.control);
  }
}
