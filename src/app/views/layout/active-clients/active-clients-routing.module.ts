import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveClientsComponent } from './active-clients/active-clients.component';
import { ActiveClientsListComponent } from './active-clients-list/active-clients-list.component';
import { ActiveClientsItemComponent } from './active-clients-item/active-clients-item.component';

const routes: Routes = [ 
  {path:'' , component: ActiveClientsComponent , children: [
    { path: '', component: ActiveClientsListComponent }, 
    { path: 'client-item/:id', component: ActiveClientsItemComponent }, 
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ActiveClientsRoutingModule { }
