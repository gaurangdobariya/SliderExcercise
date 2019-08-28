import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numberpipe',
  templateUrl: './numberpipe.component.html',
  styleUrls: ['./numberpipe.component.css']
})
export class NumberpipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pi: number = 3.14;
  e: number = 2.718281828459045;

}
