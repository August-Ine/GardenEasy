import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LawnService } from 'src/app/models/lawn-service.model';
import { lawnServiceWithSelection } from 'src/app/pages/quick-estimate/quick-estimate.component';

@Component({
  selector: 'app-quick-estimate-service-card',
  templateUrl: './quick-estimate-service-card.component.html',
  styleUrls: ['./quick-estimate-service-card.component.css'],
})
export class QuickEstimateServiceCardComponent implements OnInit {
  @Input() lawnServiceWithSelection: lawnServiceWithSelection = {
    lawnService: new LawnService('', '', 0, 3),
    selected: false,
  };
  @Output() selectedToggleEvent: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  toggleSelected(lawnServiceId: number) {
    this.selectedToggleEvent.emit(lawnServiceId);
  }
}
