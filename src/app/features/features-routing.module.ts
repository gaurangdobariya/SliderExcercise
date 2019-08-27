import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { MainContainerComponent } from './components/container/main-container/main-container.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: 'signup',
        component: SignUpComponent
      },
      // {
      //   path  :  ''
      //   component : 
      // } 
      // {
      //   path : 'dashboard',
      //   component : MainContainerComponent
      // }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
