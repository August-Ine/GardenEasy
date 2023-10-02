import { TestBed } from '@angular/core/testing';

import { LawnServiceService } from './lawn-service.service';

describe('LawnServiceService', () => {
  let service: LawnServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
