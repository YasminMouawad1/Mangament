import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: '', component: StatisticsComponent  , children: [
   { path: '', component: StatisticsListComponent },   


]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
