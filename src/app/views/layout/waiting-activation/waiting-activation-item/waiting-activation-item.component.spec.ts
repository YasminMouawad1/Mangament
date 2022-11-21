import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingActivationItemComponent } from './waiting-activation-item.component';

describe('WaitingActivationItemComponent', () => {
  let component: WaitingActivationItemComponent;
  let fixture: ComponentFixture<WaitingActivationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingActivationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingActivationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
