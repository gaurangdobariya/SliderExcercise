import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from 'src/app/dynamic-form/service/dynamic-form.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.scss']
})
export class SetFormComponent implements OnInit {
  form: FormGroup;
  formData: [];
  constructor(private dfService: DynamicFormService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
    });
    this.getData();
  }
  getData() {
    this.formData = this.dfService.getFormData();
  }
  onSubmit(){
    console.log(this.form);
    
  }
}
