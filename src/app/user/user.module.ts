import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartsComponent } from './aparts/aparts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { ResidentsComponent } from './residents/residents.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../core/guards/login.guard';

const yourRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
  },
  { path: 'aparts', component: ApartsComponent, canActivate: [LoginGuard] },
  { path: 'parcels', component: ApartsComponent, canActivate: [LoginGuard] },
  {
    path: 'residents',
    component: ResidentsComponent,
    canActivate: [LoginGuard],
  },
  { path: 'visitors', component: VisitorsComponent, canActivate: [LoginGuard] },
];

export const yourRouting = RouterModule.forChild(yourRoutes);

@NgModule({
  declarations: [
    ApartsComponent,
    DashboardComponent,
    ParcelsComponent,
    ResidentsComponent,
    VisitorsComponent,
  ],
  imports: [CommonModule, yourRouting],
})
export class UserModule {}
