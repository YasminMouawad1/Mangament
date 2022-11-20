import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkOnBoardingRoutingModule } from './bulk-on-boarding-routing.module';
import { BulkOnBoradingComponent } from './bulk-on-borading/bulk-on-borading.component';
import { BulkOnBoradingListComponent } from './bulk-on-borading-list/bulk-on-borading-list.component';
import { BulkOnBoradingItemComponent } from './bulk-on-borading-item/bulk-on-borading-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SearchPipe } from '../../../shared/pipe/search.pipe';
import { CoporatesComponent } from './coporates/coporates.component';
 

@NgModule({
  declarations: [
    BulkOnBoradingComponent,
    BulkOnBoradingListComponent,
    BulkOnBoradingItemComponent, 
    SearchPipe,
    CoporatesComponent
  ],
  imports: [
    
  CommonModule,
    BulkOnBoardingRoutingModule, 
    NgxPaginationModule,
    TranslateModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class BulkOnBoardingModule { }
