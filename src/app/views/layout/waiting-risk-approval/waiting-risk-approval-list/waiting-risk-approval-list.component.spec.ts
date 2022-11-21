import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingRiskApprovalListComponent } from './waiting-risk-approval-list.component';

describe('WaitingRiskApprovalListComponent', () => {
  let component: WaitingRiskApprovalListComponent;
  let fixture: ComponentFixture<WaitingRiskApprovalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingRiskApprovalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingRiskApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
