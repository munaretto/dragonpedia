import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  newAccountForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  async onLoginSubmit() {
    const credentials = {
      username: this.loginForm.get('username')!.value,
      password: this.loginForm.get('password')!.value
    }

    await this.authService.login(credentials).catch(err => {
      console.error("ERRO AO FAZER LOGIN: ", err)
    });
  }

  async onCreateUser() {
    const credentials = {
      username: this.newAccountForm.get('username')!.value,
      password: this.newAccountForm.get('password')!.value
    }

    await this.authService.newUser(credentials)
      .then(resp => {
        console.log("USUARIO CRIADO COM SUCESSO: ", resp);
      })
      .catch(err => {
        console.error("ERRO AO CRIAR USUARIOS: ", err)
      }
    );
  }



}
