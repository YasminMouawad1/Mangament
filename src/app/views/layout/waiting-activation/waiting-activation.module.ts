import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitingActivationRoutingModule } from './waiting-activation-routing.module';
import { WaitingActivationComponent } from './waiting-activation/waiting-activation.component';
import { WaitingActivationListComponent } from './waiting-activation-list/waiting-activation-list.component';
import { WaitingActivationItemComponent } from './waiting-activation-item/waiting-activation-item.component';


import { NgxPaginationModule } from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

@NgModule({
  declarations: [
    WaitingActivationComponent,
    WaitingActivationListComponent,
    WaitingActivationItemComponent
  ],
  imports: [
    CommonModule,
    WaitingActivationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class WaitingActivationModule { }
