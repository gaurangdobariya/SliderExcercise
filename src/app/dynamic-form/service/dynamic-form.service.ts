import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  formData=[];
  constructor() { }

  addFormData(data) {

  this.formData = data;
  
  }
  getFormData(): any {
    return this.formData;
  }
}
