import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarousalModuleRoutingModule } from './carousal-module-routing.module';
import { CarousalComponent } from './carousal/carousal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarousalComponent],
  imports: [
    CommonModule,
    CarousalModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [CarousalComponent]
})
export class CarousalModuleModule { }
