import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
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

  constructor(private fb: FormBuilder, private authService: AuthService, private alertService: AlertService) {}

  ngOnInit(): void {}

  onLoginSubmit() {
    const credentials = {
      username: this.loginForm.get('username')!.value,
      password: this.loginForm.get('password')!.value
    }

    this.authService.login(credentials)
    .then(res => {
      this.alertService.open({
        message: 'Login efetuado!',
        type: 'SUCCESS'
      })
    })
    .catch(err => {
      this.alertService.open({
        message: err.message,
        type: 'ERROR'
      })
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
        this.alertService.open({
          message: 'Usuário criado!',
          type: 'SUCCESS'
        })
      })
      .catch(err => {
        this.alertService.open({
          message: err.message,
          type: 'ERROR'
        })
        console.error("ERRO AO CRIAR USUARIOS: ", err)
      }
    );
  }



}
