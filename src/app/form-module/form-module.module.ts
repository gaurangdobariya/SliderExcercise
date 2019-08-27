import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormModuleRoutingModule } from './form-module-routing.module';
import { SetRadioComponent } from './set-radio/set-radio.component';
import { SetFormComponent } from './set-form/set-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetTextComponent } from './set-text/set-text.component';

@NgModule({
  declarations: [SetRadioComponent, SetFormComponent, SetTextComponent],
  imports: [
    CommonModule,
    FormModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModuleModule { }
