import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlternateComponent } from './card-alternate.component';

describe('CardAlternateComponent', () => {
  let component: CardAlternateComponent;
  let fixture: ComponentFixture<CardAlternateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAlternateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAlternateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
