import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() disabled = false;
  @Input() outline = false;

  constructor() {}

  ngOnInit(): void {}

  onClickButton(event: Event) {
    event.preventDefault();
    this.onClick.emit();
  }
}
