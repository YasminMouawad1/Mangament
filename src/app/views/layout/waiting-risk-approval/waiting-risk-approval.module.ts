import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitingRiskApprovalRoutingModule } from './waiting-risk-approval-routing.module';
import { WaitingRiskApprovalComponent } from './waiting-risk-approval/waiting-risk-approval.component';
import { WaitingRiskApprovalListComponent } from './waiting-risk-approval-list/waiting-risk-approval-list.component';
import { WaitingRiskApprovalItemComponent } from './waiting-risk-approval-item/waiting-risk-approval-item.component';


import { NgxPaginationModule } from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

@NgModule({
  declarations: [
    WaitingRiskApprovalComponent,
    WaitingRiskApprovalListComponent,
    WaitingRiskApprovalItemComponent
  ],
  imports: [
    CommonModule,
    WaitingRiskApprovalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class WaitingRiskApprovalModule { }
