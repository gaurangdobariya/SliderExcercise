import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'; 
@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
  today: number = Date.now();
now : string = moment().format('MMM D,YYYY');
//  now = moment(); // add this 2 of 4
    // console.log('hello world', now.format()); // add this 3 of 4
    // console.log(now.add(7, 'days').format()); // add this 4of 4
}
