import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CryptoService } from 'src/app/core/services/crypto/crypto.service';
import { LoginCredentials } from 'src/app/pages/login/interfaces/login-credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService{

  private readonly _isLoggedIn = new BehaviorSubject<boolean>(false);
  readonly isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor(private cryptoService: CryptoService, private router: Router) {
    this.retrieveCurrentUser();
  }

  private retrieveCurrentUser() {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
      ? JSON.parse(localStorage.isLoggedIn)
      : false;

    if (isLoggedIn) {
      this.updateAuthStatus(true);
    }
    else {
      this.updateAuthStatus(false);
    }
  }

  private updateAuthStatus(newStatus: boolean): void {
    this._isLoggedIn.next(newStatus);
  }

  login(credentials: LoginCredentials): Promise<any> {
    return new Promise((resolve, reject) => {
      const recoveredUsers = localStorage.getItem('users')
        ? JSON.parse(localStorage.users)
        : [];

      const matchingUser = recoveredUsers.find((user: LoginCredentials) => user.username === credentials.username);

      if (matchingUser && this.cryptoService.decrypt(matchingUser.password) === credentials.password) {
        resolve({error: false})
        this.updateAuthStatus(true);
        this.router.navigate(['/dragons']);
        localStorage.isLoggedIn = true
      }
      else {
        reject({error: true, message: 'Credenciais inválidas'})
        this.updateAuthStatus(false);
      }
    })
  }

  logout() {
    localStorage.isLoggedIn = false;
    this.updateAuthStatus(false);
    this.router.navigate(['/login']);
  }

  newUser(credentials: LoginCredentials) {
    return new Promise((resolve, reject) => {
      const recoveredUsers = localStorage.getItem('users')
        ? JSON.parse(localStorage.users)
        : [];

      const matchingUser = recoveredUsers.find((user: LoginCredentials) => user.username === credentials.username);

      if (matchingUser) {
        return reject({error: true, message: 'Usuário já existe'});
      }
      else {
        const user : LoginCredentials = {
          username: credentials.username,
          password: this.cryptoService.encrypt(credentials.password)
        }

        recoveredUsers.push(user)
        localStorage.users = JSON.stringify(recoveredUsers);
        resolve({error: false});
      }
    })
  }
}
