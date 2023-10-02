import { Component, Input, OnInit } from '@angular/core';
import { lawnServiceWithSelection } from 'src/app/pages/quick-estimate/quick-estimate.component';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css'],
})
export class PricingCardComponent implements OnInit {
  @Input() recommended = false;
  @Input() totalPrice = 0;
  @Input() lawnServicesWithSelection: lawnServiceWithSelection[] = [];

  constructor() {}

  ngOnInit(): void {}
}
