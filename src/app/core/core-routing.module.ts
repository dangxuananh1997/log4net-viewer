import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from '../shared/services/auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthService], data: { routeRole: 'admin' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
