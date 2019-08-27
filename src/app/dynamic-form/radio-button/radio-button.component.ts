import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  radioGroup: FormGroup;
  addControl:FormControl;
  @Input() change: boolean;
  @Output() display: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addControl=this.fb.control("");
    this.radioGroup = this.fb.group({
      radioName: [''],
      options:this.fb.array([])
    })
  }
  
  get options(){        
    return this.radioGroup.get("options") as FormArray;
  }

  createLabel(){
    return this.fb.control('');
  }

  onClick(){
    this.options.push(this.createLabel());
  }

  onSubmit() {
    if(this.radioGroup){
      this.display.emit(this.radioGroup.value);
    }
    
  }

  ngOnChanges() {
    this.onSubmit();
  }

}
