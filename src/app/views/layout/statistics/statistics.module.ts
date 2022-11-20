import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticsListComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,  
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class StatisticsModule { }
