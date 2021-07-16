import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  isLoggedIn$: Observable<boolean> = new Observable();

  constructor(private authService: AuthService) {
    this.getIsLoggedInObservable();
  }

  getIsLoggedInObservable() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
}
