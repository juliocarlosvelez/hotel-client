import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessfulPageComponent } from './payment-successful-page.component';

describe('PaymentSuccessfulPageComponent', () => {
  let component: PaymentSuccessfulPageComponent;
  let fixture: ComponentFixture<PaymentSuccessfulPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSuccessfulPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSuccessfulPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
