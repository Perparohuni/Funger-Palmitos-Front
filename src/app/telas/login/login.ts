import { ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../services/login.service';
import { LoginDTO } from '../../dto/loginDTO';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

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

  private readonly destroyRef = inject(DestroyRef);

  constructor(private loginService: LoginService, private router: Router, private cdr: ChangeDetectorRef) {}

  acesso() {
    if (this.login == "" || this.senha == "") {
      this.avisos = 'Preenche os campos aí fazendo um favor, tá ok?';
      this.aviso = true;
      return;
    }

    const dto = new LoginDTO();
    dto.login = this.login;
    dto.senha = this.senha;

    this.loginService.login(dto)
    .pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.dados);
        this.aviso = false;
        this.router.navigate(['/dashboardMestre']);
      },
      error: (err) => {
        this.aviso = true; 
        this.avisos = err.error.mensagem;
        this.cdr.detectChanges();
        }
    });
  }

}
