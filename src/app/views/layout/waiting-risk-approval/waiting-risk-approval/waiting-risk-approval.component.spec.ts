import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingRiskApprovalComponent } from './waiting-risk-approval.component';

describe('WaitingRiskApprovalComponent', () => {
  let component: WaitingRiskApprovalComponent;
  let fixture: ComponentFixture<WaitingRiskApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingRiskApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingRiskApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
