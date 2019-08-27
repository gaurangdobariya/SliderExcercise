import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';
import { log } from 'util';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  dynamicForm: FormGroup
  manageForm: FormGroup
  radio: FormControl
  controls: string[]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.controls = ['Text-Box', 'radio'];

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
    console.log(event.target.value);
    if (event.target.value == 'radio') {
     this.randerRadio(); 
    } else {

    }

  }
  randerRadio(){
    this.components.push(this.fb.group({
      type:'radio'
    }));
  } 

}
