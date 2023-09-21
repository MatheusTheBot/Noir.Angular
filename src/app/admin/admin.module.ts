import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartsComponent } from './aparts/aparts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { ResidentsComponent } from './residents/residents.component';
import { StaffComponent } from './staff/staff.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../core/guards/login.guard';
import { AdminGuard } from '../core/guards/admin.guard';
import { SharedModule } from '../shared/shared.module';

const yourRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard, AdminGuard],
  },
  {
    path: 'aparts',
    component: ApartsComponent,
    canActivate: [LoginGuard, AdminGuard],
  },
  {
    path: 'parcels',
    component: ApartsComponent,
    canActivate: [LoginGuard, AdminGuard],
  },
  {
    path: 'residents',
    component: ResidentsComponent,
    canActivate: [LoginGuard, AdminGuard],
  },
  {
    path: 'visitors',
    component: VisitorsComponent,
    canActivate: [LoginGuard, AdminGuard],
  },
  {
    path: 'staff',
    component: StaffComponent,
    canActivate: [LoginGuard, AdminGuard],
  },
];

export const yourRouting = RouterModule.forChild(yourRoutes);

@NgModule({
  declarations: [
    ApartsComponent,
    DashboardComponent,
    ParcelsComponent,
    ResidentsComponent,
    VisitorsComponent,
    StaffComponent,
  ],
  imports: [CommonModule, yourRouting, SharedModule],
})
export class AdminModule {}
