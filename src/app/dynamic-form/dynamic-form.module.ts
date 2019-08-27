import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { CreateFormComponent } from './create-form/create-form.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateFormComponent, TextBoxComponent, RadioButtonComponent],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DynamicFormModule { }
