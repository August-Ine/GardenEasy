import { Injectable } from '@angular/core';
import { LawnService } from '../models/lawn-service.model';
import { lawnServices } from 'src/app-data/lawn-services';

@Injectable({
  providedIn: 'root',
})
export class LawnServiceService {
  lawnServices: LawnService[] = [];

  constructor() {
    this.lawnServices = lawnServices;
  }

  getLawnServices() {
    return this.lawnServices.slice();
  }
}
