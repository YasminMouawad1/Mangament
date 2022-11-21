import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { OnboardingComponent } from './onboarding/onboarding.component';
import { OnboardingListComponent } from './onboarding-list/onboarding-list.component';
import { OnboardingItemComponent } from './onboarding-item/onboarding-item.component';
import { OnboardingProcessRoutingModule } from './onboarding-process-rounting.module';


import { NgxPaginationModule } from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

@NgModule({
  declarations: [ 
    OnboardingComponent,
    OnboardingListComponent,
    OnboardingItemComponent
  ],
  imports: [
    CommonModule,
    OnboardingProcessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class OnboardingProcessModule { }
