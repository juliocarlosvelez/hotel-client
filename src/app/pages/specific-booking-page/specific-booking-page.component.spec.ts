import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificBookingPageComponent } from './specific-booking-page.component';

describe('SpecificBookingPageComponent', () => {
  let component: SpecificBookingPageComponent;
  let fixture: ComponentFixture<SpecificBookingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificBookingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
