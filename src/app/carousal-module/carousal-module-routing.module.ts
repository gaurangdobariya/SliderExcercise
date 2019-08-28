import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarousalComponent } from './carousal/carousal.component';

const routes: Routes = [{
  path : '',
  component : CarousalComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarousalModuleRoutingModule { }
