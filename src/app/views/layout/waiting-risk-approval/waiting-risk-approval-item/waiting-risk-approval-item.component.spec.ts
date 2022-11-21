import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingRiskApprovalItemComponent } from './waiting-risk-approval-item.component';

describe('WaitingRiskApprovalItemComponent', () => {
  let component: WaitingRiskApprovalItemComponent;
  let fixture: ComponentFixture<WaitingRiskApprovalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingRiskApprovalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingRiskApprovalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
