import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { OnboardingItemComponent } from './onboarding-item/onboarding-item.component';
import { OnboardingListComponent } from './onboarding-list/onboarding-list.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const routes: Routes = [ 
  {path:'' , component: OnboardingComponent , children: [
    { path: '', component: OnboardingListComponent }, 
    { path: 'onboarding-item/:id', component: OnboardingItemComponent }, 
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class OnboardingProcessRoutingModule { }