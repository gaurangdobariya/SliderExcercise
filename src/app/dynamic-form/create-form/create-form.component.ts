import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';
import { log } from 'util';
import { DynamicFormService } from '../service/dynamic-form.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  dynamicForm: FormGroup
  manageForm: FormGroup
  controls: string[]
  change: boolean = false;
  feilds = []
  constructor(private fb: FormBuilder, private dpService: DynamicFormService, private route: Router) { }

  ngOnInit() {
    this.controls = ['textbox', 'radio'];

    this.manageForm = this.fb.group({
      options: ['']
    });

    this.dynamicForm = this.fb.group({
      name: [''],
      components: this.fb.array([])
    });


  }

  get components() {
    return this.dynamicForm.get('components') as FormArray;
  }
  onChangeControl(event) {
    this.change = !this.change;
    if (event.target.value == 'radio') {
      this.renderRadio();

    } else if (event.target.value == 'textbox') {
      this.renderText();
    }
  }
  renderRadio() {
    this.components.push(this.fb.group({
      type: 'radio'
    }));
  }

  renderText() {
    this.components.push(this.fb.group({
      type: 'text'
    }));
  }

  addRadio(event, index) {
    this.feilds.splice(index, 1, {
      "type": "radio",
      "question": event.radioName,
      "labels": event.options
    });


  }

  addText(event, index) {
    this.feilds.splice(index, 1, {
      "type": "text",
      "question": event,
    });

  }

  onSubmit() {
    this.change = !this.change;
    this.dpService.addFormData(this.feilds)
    console.log(this.feilds);
    
    setTimeout(()=>{
      this.route.navigate(['createform'])
    },2000)
   


  }

}
