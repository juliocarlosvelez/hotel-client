import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFailedPageComponent } from './payment-failed-page.component';

describe('PaymentFailedPageComponent', () => {
  let component: PaymentFailedPageComponent;
  let fixture: ComponentFixture<PaymentFailedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentFailedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
