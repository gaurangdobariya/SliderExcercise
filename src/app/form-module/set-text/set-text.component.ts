import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-set-text',
  templateUrl: './set-text.component.html',
  styleUrls: ['./set-text.component.scss']
})
export class SetTextComponent implements OnInit {

  @Input() field: any = {};
  @Input() form: FormGroup;
  get controls() {
    return this.form.controls[this.field.question];
  }

  setControls(){
    this.form.addControl(this.field.question,new FormControl(""))
    console.log(this.form);
    
  }
  constructor() { }
  ngOnInit() {
    console.log("Called");
    
    this.setControls()
  }
}
