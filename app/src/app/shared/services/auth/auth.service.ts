import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginCredentials } from 'src/app/pages/login/interfaces/login-credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly _isLoggedIn = new BehaviorSubject<boolean>(false);
  readonly isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor() {

  }

  private updateAuthStatus(newStatus: boolean): void {
    this._isLoggedIn.next(newStatus);
  }

  login(credentials: LoginCredentials): Promise<any> {
    const usersDB = [
      {username: 'user1', password: 'a123456'}
    ]

    /**
     * Isto deve ir na criação do usuario
     */
    localStorage.users = JSON.stringify(usersDB);

    return new Promise((resolve, reject) => {
      const recoveredUsers = JSON.parse(localStorage.users);
      const matchingUser = recoveredUsers.find((user: LoginCredentials) => user.username === credentials.username);

      if (matchingUser && matchingUser.password === credentials.password) {
        matchingUser.loggedIn = true;
        console.log("MATCHING USER: ", matchingUser);

        resolve({error: false})
        this.updateAuthStatus(true);
      }
      else {
        reject({error: true, message: 'Credenciais inválidas'})
        this.updateAuthStatus(false);
      }
    })
  }

  logout() {
    this.updateAuthStatus(false);
  }
}
