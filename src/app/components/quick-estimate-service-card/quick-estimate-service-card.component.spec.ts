import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickEstimateServiceCardComponent } from './quick-estimate-service-card.component';

describe('QuickEstimateServiceCardComponent', () => {
  let component: QuickEstimateServiceCardComponent;
  let fixture: ComponentFixture<QuickEstimateServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickEstimateServiceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickEstimateServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
