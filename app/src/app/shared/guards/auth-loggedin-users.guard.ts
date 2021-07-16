import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class LoggedInUserAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.checkLogin();
  }

  checkLogin() {
    if (JSON.parse(localStorage.isLoggedIn)) {
      this.router.navigate(['/dragons']);
      return false;
    } else {
      return true;
    }
  }
}
