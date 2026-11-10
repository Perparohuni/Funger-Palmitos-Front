import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonDirective } from 'primeng/button';

@Component({
    selector: 'app-perdido',
    imports: [ButtonDirective],
    templateUrl: './perdido.html',
    styleUrl: './perdido.scss',
})
export class Perdido {
    mestre: boolean;

    constructor(private router: Router) {
        if (localStorage.getItem('mestre') === 'true') {
            this.mestre = true;
        } else {
            this.mestre = false;
        }
    }

    voltar() {
        this.router.navigate([this.mestre ? 'mestrices' : 'aventurices']);
    }
}
