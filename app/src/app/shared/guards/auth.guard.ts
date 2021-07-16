import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.checkLogin();
  }

  checkLogin() {
    if (JSON.parse(localStorage.isLoggedIn)) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
