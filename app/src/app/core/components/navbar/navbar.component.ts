import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  sidenavIsOpen: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onMenuClicked() {
    this.sidenavIsOpen = !this.sidenavIsOpen;
  }

  onLogout() {
    this.authService.logout();
  }

}
