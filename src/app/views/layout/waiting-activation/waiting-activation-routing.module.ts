import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitingActivationItemComponent } from './waiting-activation-item/waiting-activation-item.component';
import { WaitingActivationListComponent } from './waiting-activation-list/waiting-activation-list.component';
import { WaitingActivationComponent } from './waiting-activation/waiting-activation.component';

const routes: Routes = [ 
  {path:'' , component: WaitingActivationComponent , children: [
    { path: '', component: WaitingActivationListComponent }, 
    { path: 'wait-item/:id', component: WaitingActivationItemComponent }, 
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitingActivationRoutingModule { }
