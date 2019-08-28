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
  private sideBarItems: string[] = ['Date Pipe', 'Number Pipe', 'Dynamic Form','Carousal'];
  private selectedIndex = 0;

  setIndex(index: number) {
    this.selectedIndex = index;
    let temproute = this.selectedIndex == 0 ? 'dashboard/datepipe' : this.selectedIndex == 1 ? 'dashboard/numberpipe' : this.selectedIndex == 2 ? 'dashboard/dynamicform' : 'dashboard/carousal';
   if(index == 3){
     
   }
    this.router.navigate([temproute])
  }
}
