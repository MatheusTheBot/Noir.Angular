import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ParcelsComponent } from './user/parcels/parcels.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { VisitorsComponent } from './user/visitors/visitors.component';
import { UsersComponent } from './admin/users/users.component';
import { ApartsComponent } from './admin/aparts/aparts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ParcelsComponent,
    DashboardComponent,
    VisitorsComponent,
    UsersComponent,
    ApartsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
