import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formCadastro: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  email: string = '';
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  password: string = '';

  mensagens = {
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    password: [
      { tipo: 'required', mensagem: 'O campo Senha é obrigatório.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ]
  };

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {

    this.formCadastro = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });

  }

  ngOnInit(): void {}

  login() {

    if(this.formCadastro.valid){
      this.email = this.formCadastro.value.email;
      this.password = this.formCadastro.value.password;
    }

    this.auth.login(this.email, this.password);

  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }

}
