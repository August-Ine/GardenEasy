import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickEstimateComponent } from './quick-estimate.component';

describe('QuickEstimateComponent', () => {
  let component: QuickEstimateComponent;
  let fixture: ComponentFixture<QuickEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickEstimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
