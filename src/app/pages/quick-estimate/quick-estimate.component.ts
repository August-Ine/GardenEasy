import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LawnService } from 'src/app/models/lawn-service.model';
import { LawnServiceService } from 'src/app/services/lawn-service.service';

export interface lawnServiceWithSelection {
  lawnService: LawnService;
  selected: boolean;
}

//todo: sort selected services in price card to show selected services first
// have the form above the service cards

@Component({
  selector: 'app-quick-estimate',
  templateUrl: './quick-estimate.component.html',
  styleUrls: ['./quick-estimate.component.css'],
})
export class QuickEstimateComponent implements OnInit {
  lawnServicesSelection: lawnServiceWithSelection[] = [];
  selectedServiceId: number = 1;
  monthlyPrice = 0;
  annualPrice = 0; //annual price with 25% discount
  visitOptions = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
    { value: 4, label: 'Four' },
  ];
  lawnSizeForm = this.formBuilder.group({
    lawnSizeInput: new FormControl('1', [Validators.pattern('^[0-9]*$')]),
    visitFrequency: [2],
  });

  get lawnSizeInput() {
    return this.lawnSizeForm.get('lawnSizeInput');
  }

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private lService: LawnServiceService
  ) {}

  ngOnInit(): void {
    this.selectedServiceId = +this.route.snapshot.params['serviceId'];
    this.lawnServicesSelection = this.lService
      .getLawnServices()
      .map((lawnService) => {
        if (lawnService.id === this.selectedServiceId) {
          return { lawnService, selected: true };
        }
        return { lawnService, selected: false };
      });
    this.calculateTotalPrice();
  }

  selectedToggleEventHandler(id: number) {
    this.lawnServicesSelection = this.lawnServicesSelection.map(
      (lServiceSelection) => {
        if (lServiceSelection.lawnService.id === id) {
          return {
            ...lServiceSelection,
            selected: !lServiceSelection.selected,
          };
        }
        return { ...lServiceSelection };
      }
    );
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    const selectedServices = this.lawnServicesSelection.filter(
      (service) => service.selected
    );
    if (
      this.lawnSizeInput?.value &&
      this.lawnSizeForm.get('visitFrequency')?.value
    ) {
      const sizeInAcres = +this.lawnSizeInput.value;
      const visitFrequency = this.lawnSizeForm.get('visitFrequency')?.value;
      this.monthlyPrice = selectedServices.reduce((acc, service) => {
        return (
          acc + service.lawnService.pricePerAcre * sizeInAcres * visitFrequency!
        );
      }, 0);
      this.annualPrice = +(this.monthlyPrice * 12 * 0.75).toFixed(2);
    }
  }

  onInputChange(lawnSize: number) {
    this.calculateTotalPrice();
  }
}
