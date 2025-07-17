import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotP } from './forgot-p';

describe('ForgotP', () => {
  let component: ForgotP;
  let fixture: ComponentFixture<ForgotP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
