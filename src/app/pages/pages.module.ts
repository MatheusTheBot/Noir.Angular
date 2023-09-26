import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboards/user-dashboard/user-dashboard.component';
import { UserParcelsComponent } from './parcels/user-parcels/user-parcels.component';
import { AdminParcelsComponent } from './parcels/admin-parcels/admin-parcels.component';
import { AdminStaffComponent } from './staffs/admin-staff/admin-staff.component';
import { UserStaffComponent } from './staffs/user-staff/user-staff.component';
import { ErrorComponent } from './error/error.component';
import { UserResidentComponent } from './residents/user-resident/user-resident.component';
import { AdminResidentComponent } from './residents/admin-resident/admin-resident.component';
import { adminGuard } from '../core/guards/admin.guard';
import { loginGuard } from '../core/guards/login.guard';
import { UserVisitantComponent } from './visitants/user-visitant/user-visitant.component';
import { AdminVisitantComponent } from './visitants/admin-visitant/admin-visitant.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        canActivate: [adminGuard, loginGuard],
      },
      {
        path: 'residents',
        component: AdminResidentComponent,
        canActivate: [adminGuard, loginGuard],
      },
      {
        path: 'visitants',
        component: AdminVisitantComponent,
        canActivate: [adminGuard, loginGuard],
      },
      {
        path: 'parcels',
        component: AdminParcelsComponent,
        canActivate: [adminGuard, loginGuard],
      },
      {
        path: 'staff',
        component: AdminStaffComponent,
        canActivate: [adminGuard, loginGuard],
      },
    ],
  },
  {
    path: 'user',
    children: [
      {
        path: 'dashboard',
        component: UserDashboardComponent,
        canActivate: [loginGuard],
      },
      {
        path: 'residents',
        component: UserResidentComponent,
        canActivate: [loginGuard],
      },
      {
        path: 'visitants',
        component: UserVisitantComponent,
        canActivate: [loginGuard],
      },
      {
        path: 'parcels',
        component: UserParcelsComponent,
        canActivate: [loginGuard],
      },
    ],
  },
];

export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    UserParcelsComponent,
    AdminParcelsComponent,
    AdminStaffComponent,
    UserStaffComponent,
    ErrorComponent,
    UserResidentComponent,
    AdminResidentComponent,
  ],
  imports: [routing, CommonModule, ComponentsModule],
})
export class PagesModule {}
