import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  email: string = '';
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  password: string = '';

  mensagens = {
    /*nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 10 caracteres.' },
    ],*/
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    password: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ]
  };

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.formCadastro = this.formBuilder.group({
      //nome: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
   }

  ngOnInit() {}

  register() {
    if(this.formCadastro.valid){
      this.email = this.formCadastro.value.email;
      this.password = this.formCadastro.value.password;
    }

    this.auth.register(this.email, this.password);
  }
}
