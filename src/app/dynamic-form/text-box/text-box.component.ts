import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  textForm: FormGroup
  // text: FormControl
  @Input() change :boolean; 
  @Output() display: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.textForm = this.fb.group({
      textBox : []
    })
  }



  get textBox(){
    return this.textForm.get('textBox');
  }
  ngOnChanges() {
    this.onSubmit();
  }
  onSubmit() {
    if(this.textForm)
    this.display.emit(this.textBox.value);
  }
}
