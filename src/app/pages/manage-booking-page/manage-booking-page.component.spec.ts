import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBookingPageComponent } from './manage-booking-page.component';

describe('ManageBookingPageComponent', () => {
  let component: ManageBookingPageComponent;
  let fixture: ComponentFixture<ManageBookingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBookingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
