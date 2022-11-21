import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitingRiskApprovalItemComponent } from './waiting-risk-approval-item/waiting-risk-approval-item.component';
import { WaitingRiskApprovalListComponent } from './waiting-risk-approval-list/waiting-risk-approval-list.component';
import { WaitingRiskApprovalComponent } from './waiting-risk-approval/waiting-risk-approval.component';

const routes: Routes = [ 
  {path:'' , component: WaitingRiskApprovalComponent , children: [
    { path: '', component: WaitingRiskApprovalListComponent }, 
    { path: 'waiting-risk/:id', component: WaitingRiskApprovalItemComponent }, 
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitingRiskApprovalRoutingModule { }
