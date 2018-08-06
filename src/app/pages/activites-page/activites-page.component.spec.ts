import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesPageComponent } from './activites-page.component';

describe('ActivitesPageComponent', () => {
  let component: ActivitesPageComponent;
  let fixture: ComponentFixture<ActivitesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
