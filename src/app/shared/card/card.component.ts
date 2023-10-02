import { Component, Input, OnInit } from '@angular/core';
import { LawnService } from 'src/app/models/lawn-service.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() lawnService: LawnService = new LawnService('', '', 0, 3);

  constructor() {}

  ngOnInit(): void {}

  quickEstimateClicked(): void {
    console.log('Clicked!!');
  }
}
