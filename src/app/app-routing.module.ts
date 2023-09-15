import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { LoginGuard } from './guards/login.guard';
import { AdminApartsComponent } from './admin/admin-aparts/admin-aparts.component';
import { AdminParcelsComponent } from './admin/admin-parcels/admin-parcels.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminVisitorsComponent } from './admin/admin-visitors/admin-visitors.component';
import { AdminResidentsComponent } from './admin/admin-residents/admin-residents.component';
import { UserApartsComponent } from './user/user-aparts/user-aparts.component';
import { UserVisitorsComponent } from './user/user-visitors/user-visitors.component';
import { UserParcelsComponent } from './user/user-parcels/user-parcels.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserResidentsComponent } from './user/user-residents/user-residents.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RedirectPageComponent } from './redirect-page/redirect-page.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RedirectPageComponent,
  },

  { path: 'login', component: LoginComponent },

  {
    path: 'admin',
    canActivate: [AdminGuard],
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'residents',
        component: AdminResidentsComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'aparts',
        component: AdminApartsComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'parcels',
        component: AdminParcelsComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'visitors',
        component: AdminVisitorsComponent,
        canActivate: [AdminGuard],
      },
    ],
  },

  {
    path: 'user',
    canActivate: [LoginGuard],
    children: [
      {
        path: 'dashboard',
        component: UserDashboardComponent,
        canActivate: [LoginGuard, AdminGuard],
      },
      {
        path: 'residents',
        component: UserResidentsComponent,
        canActivate: [LoginGuard, AdminGuard],
      },
      {
        path: 'aparts',
        component: UserApartsComponent,
        canActivate: [LoginGuard, AdminGuard],
      },
      {
        path: 'parcels',
        component: UserParcelsComponent,
        canActivate: [LoginGuard, AdminGuard],
      },
      {
        path: 'visitors',
        component: UserVisitorsComponent,
        canActivate: [LoginGuard, AdminGuard],
      },
    ],
  },
  { path: 'redirect', component: RedirectPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
