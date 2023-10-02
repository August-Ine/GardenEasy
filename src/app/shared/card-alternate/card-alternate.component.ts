import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/models/testimonial.model';

@Component({
  selector: 'app-card-alternate',
  templateUrl: './card-alternate.component.html',
  styleUrls: ['./card-alternate.component.css'],
})
export class CardAlternateComponent implements OnInit {
  @Input() testimonial: Testimonial = new Testimonial('', '', '');
  constructor() {}

  ngOnInit(): void {}
}
