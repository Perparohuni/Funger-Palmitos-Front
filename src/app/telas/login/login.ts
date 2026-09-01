import { Component, DestroyRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../services/login.service';
import { LoginDTO } from '../../dto/loginDTO';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'app-login',
    imports: [InputTextModule, FloatLabelModule, FormsModule, ButtonModule],
    templateUrl: './login.html',
    styleUrl: './login.scss',
})
export class Login {
    login: string = '';
    senha: string = '';
    aviso = false;
    avisos!: string;

    private readonly destroyRef = inject(DestroyRef);

    constructor(
        private loginService: LoginService,
        private router: Router,
        private toast: ToastService,
    ) {}

    acesso() {
        if (this.login == '' || this.senha == '') {
            this.toast.erro('Preenche os campos aí fazendo um favor!');
            return;
        }

        const dto = new LoginDTO();
        dto.login = this.login;
        dto.senha = this.senha;

        this.loginService
            .login(dto)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (res) => {
                    const mestre: boolean = res.dados.mestre;
                    localStorage.setItem('token', res.dados.token);
                    localStorage.setItem('login', res.dados.login);
                    localStorage.setItem('mestre', res.dados.mestre);
                    this.aviso = false;
                    if (mestre) {
                        this.toast.sucesso('Mestre logado com sucesso!');
                        this.router.navigate(['/mestrices']);
                    } else {
                        this.toast.sucesso('Jogador logado com sucesso!');
                        this.router.navigate(['/campanhas']);
                    }
                },
            });
    }
}
