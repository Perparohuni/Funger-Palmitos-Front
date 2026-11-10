import { Injectable } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class UsuarioUtils {
    constructor(
        private toast: ToastService,
        private router: Router,
    ) {}

    ehMestre(): boolean {
        const payload = JSON.parse(atob(this.getToken!.split('.')[1]));
        return payload.mestre === true;
    }

    getUsuarioId() {
        const payload = JSON.parse(atob(this.getToken!.split('.')[1]));

        if (payload.usuarioId) {
            return parseInt(payload.usuarioId);
        } else {
            this.toast.erro('Usuário não encontrado');
            this.router.navigate(['']);
            return;
        }
    }

    private get getToken(): string | undefined {
        const token = localStorage.getItem('token');
        if (!token) {
            this.toast.erro('Token inválido');
            this.router.navigate(['']);
            return;
        }

        return token;
    }
}
