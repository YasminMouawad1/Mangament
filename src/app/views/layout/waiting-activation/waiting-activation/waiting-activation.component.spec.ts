import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingActivationComponent } from './waiting-activation.component';

describe('WaitingActivationComponent', () => {
  let component: WaitingActivationComponent;
  let fixture: ComponentFixture<WaitingActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
