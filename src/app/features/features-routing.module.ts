import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { MainContainerComponent } from './components/container/main-container/main-container.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CarousalComponent } from '../carousal-module/carousal/carousal.component';
import { DatePipeComponent } from './components/date-pipe/date-pipe.component';
import { NumberpipeComponent } from './components/numberpipe/numberpipe.component';
import { CreateFormComponent } from '../dynamic-form/create-form/create-form.component';
import { SetFormComponent } from '../form-module/set-form/set-form.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    canActivate: [AuthGuardService],
    children: [
      // {
      //   path: 'signup',
      //   component: SignUpComponent
      // },
      {
        path  :  'datepipe',
        component : DatePipeComponent
      } ,
      {
        path : 'numberpipe',
        component : NumberpipeComponent
      },
      {
        path : 'carousal',
        component : CarousalComponent
      },
      {
        path: 'dynamicform',
        component : CreateFormComponent
      },
      {
        path : 'createform',
        component : SetFormComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
