import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/container/sidebar/sidebar.component';
import { MainContainerComponent } from './components/container/main-container/main-container.component';
import { FooterComponent } from './components/container/footer/footer.component';
import { HeaderComponent } from './components/container/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CarousalModuleModule } from '../carousal-module/carousal-module.module';
import { DatePipeComponent } from './components/date-pipe/date-pipe.component';
import { NumberpipeComponent } from './components/numberpipe/numberpipe.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { FormModuleModule } from '../form-module/form-module.module';

@NgModule({
  declarations: [DashboardComponent,
    DatePipeComponent,
    NumberpipeComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    SidebarComponent,
    SignUpComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CarousalModuleModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule,
    FormModuleModule
  ],
})
export class FeaturesModule { }
