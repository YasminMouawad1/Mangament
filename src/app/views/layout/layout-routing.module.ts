import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/services/guard/auth-guard.service';
// import { DynamicFormComponent } from '../reusable/dynamic-form/dynamic-form.component';
// import { WizardComponent } from '../reusable/wizard/wizard.component';
import { LayoutComponent } from './layout.component';
import { NotifierComponent } from './notifier/notifier.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    {
      path: "",
      pathMatch: "full",
      redirectTo: "statistics"
    },
    { path: 'statistics', loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule) },
    { path: 'active-clients', loadChildren: () => import('./active-clients/active-clients.module').then(m => m.ActiveClientsModule) },
    { path: 'onboarding-process', loadChildren: () => import('./onboarding-process/onboarding-process.module').then(m => m.OnboardingProcessModule) },
    { path: 'waiting-activation', loadChildren: () => import('./waiting-activation/waiting-activation.module').then(m => m.WaitingActivationModule) },
     {path:'unauthorized', component:UnauthorizedComponent}, 
     ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
