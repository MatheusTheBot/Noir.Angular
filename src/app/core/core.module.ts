import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const yourRoutes: Routes = [
  { path: '', component: RedirectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'redirect', component: RedirectComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

export const yourRouting = RouterModule.forChild(yourRoutes);

@NgModule({
  declarations: [RedirectComponent, ErrorComponent, LoginComponent],
  imports: [CommonModule, FormsModule, yourRouting],
})
export class CoreModule {}
