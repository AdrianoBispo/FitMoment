import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formCadastro: FormGroup;
  usuario: Usuario = new Usuario();

  mensagens = {
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'O campo Senha é obrigatório.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ]
  };

  constructor(private formBuilder: FormBuilder) {

    this.formCadastro = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });

  }

  ngOnInit() {}

  salvarCadastro() {
    if(this.formCadastro.valid){
      this.usuario.email = this.formCadastro.value.email;
      this.usuario.senha = this.formCadastro.value.senha;
    }
  }

}
