import { Component, OnInit } from '@angular/core';

import { lawnServices } from 'src/app-data/lawn-services';
import { testimonials } from 'src/app-data/testimonials';
import { LawnService } from 'src/app/models/lawn-service.model';
import { Testimonial } from 'src/app/models/testimonial.model';
import { LawnServiceService } from 'src/app/services/lawn-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  lawnServices: LawnService[] = [];
  testimonials: Testimonial[] = [];

  constructor(private lService: LawnServiceService) {}

  ngOnInit(): void {
    this.lawnServices = this.lService.getLawnServices();
    this.testimonials = testimonials;
  }
}
