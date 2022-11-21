import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveClientsRoutingModule } from './active-clients-routing.module';
import { ActiveClientsComponent } from './active-clients/active-clients.component';
import { ActiveClientsListComponent } from './active-clients-list/active-clients-list.component';
import { ActiveClientsItemComponent } from './active-clients-item/active-clients-item.component';

import { NgxPaginationModule } from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

@NgModule({
  declarations: [
    ActiveClientsComponent,
    ActiveClientsListComponent,
    ActiveClientsItemComponent
  ],
  imports: [
    CommonModule,
    ActiveClientsRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class ActiveClientsModule { }
