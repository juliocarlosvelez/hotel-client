import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReservationPageComponent } from './manage-reservation-page.component';

describe('ManageReservationPageComponent', () => {
  let component: ManageReservationPageComponent;
  let fixture: ComponentFixture<ManageReservationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageReservationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
