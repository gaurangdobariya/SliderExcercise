import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './SharedComponents/login/login.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'dashboard',
    pathMatch: 'full'
  },
  {
    path : 'dashboard',
    loadChildren: () => import('./features/features.module').then(mod => mod.FeaturesModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path : 'dynamicform',
  //   loadChildren: ()=>  import('./dynamic-form/dynamic-form.module').then(mod => mod.DynamicFormModule)
  // },
  // {
  //   path : 'createform',
  //   loadChildren: ()=>  import('./form-module/form-module.module').then(mod => mod.FormModuleModule)
  // }
  // {
  //   path : 'carousal',
  //   loadChildren: ()=>  import('./carousal-module/carousal-module.module').then(mod => mod.CarousalModuleModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
