import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/guards/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,private route : Router) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
    this.route.navigate(['login']);
  }

}
