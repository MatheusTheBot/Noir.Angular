import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { EncriptService } from './services/encript.service';
import { AuthService } from './services/auth.service';

import { AdminParcelsComponent } from './admin/admin-parcels/admin-parcels.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminVisitorsComponent } from './admin/admin-visitors/admin-visitors.component';
import { AdminApartsComponent } from './admin/admin-aparts/admin-aparts.component';
import { AdminResidentsComponent } from './admin/admin-residents/admin-residents.component';

import { UserApartsComponent } from './user/user-aparts/user-aparts.component';
import { UserVisitorsComponent } from './user/user-visitors/user-visitors.component';
import { UserParcelsComponent } from './user/user-parcels/user-parcels.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserResidentsComponent } from './user/user-residents/user-residents.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RedirectPageComponent } from './redirect-page/redirect-page.component';
import { AdminStaffComponent } from './admin/admin-staff/admin-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminParcelsComponent,
    AdminDashboardComponent,
    AdminVisitorsComponent,
    AdminApartsComponent,
    AdminResidentsComponent,
    UserApartsComponent,
    UserVisitorsComponent,
    UserParcelsComponent,
    UserDashboardComponent,
    UserResidentsComponent,
    ErrorPageComponent,
    RedirectPageComponent,
    AdminStaffComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EncriptService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
