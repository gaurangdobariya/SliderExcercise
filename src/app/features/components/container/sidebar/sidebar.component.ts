import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  private sideBarItems: string[] = ['Date Pipe', 'Number Pipe', 'ngx-Bootstrap'];
  private selectedIndex = 0;

  setIndex(index: number) {
    this.selectedIndex = index;
    let temproute = this.selectedIndex == 0 ? '/datepipe' : this.selectedIndex == 1 ? '/numberpipe' : '/ngxbootstrap';
    this.router.navigate([temproute])
  }
}
