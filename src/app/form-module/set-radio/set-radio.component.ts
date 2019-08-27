import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-set-radio',
  templateUrl: './set-radio.component.html',
  styleUrls: ['./set-radio.component.scss']
})
export class SetRadioComponent implements OnInit {

  @Input() field: any = {};
  @Input() form: FormGroup;
  get controls() {
    return this.form.controls[this.field.question];
  }

  setControls(){
    this.form.addControl(this.field.question,new FormControl(""))
    
  }
  constructor() { }
  ngOnInit() {
    this.setControls()
  }
}
