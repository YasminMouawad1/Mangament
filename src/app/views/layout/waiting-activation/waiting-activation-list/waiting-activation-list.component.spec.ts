import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingActivationListComponent } from './waiting-activation-list.component';

describe('WaitingActivationListComponent', () => {
  let component: WaitingActivationListComponent;
  let fixture: ComponentFixture<WaitingActivationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingActivationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingActivationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
