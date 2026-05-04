import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../services/login.service';
import { LoginDTO } from '../../dto/loginDTO';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, FloatLabelModule, FormsModule, ButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  login: string = "";
  senha: string = "";
  aviso = false;
  avisos!: string;

  constructor(private loginService: LoginService) {}

  acesso() {
    if (this.login == "" || this.senha == "") {
      this.avisos = 'Preenche os campos aí fazendo um favor, tá ok?';
      this.aviso = true;
    }

    const dto = new LoginDTO();
    dto.login = this.login;
    dto.senha = this.senha;

    this.loginService.login(dto).subscribe();
  }

}
