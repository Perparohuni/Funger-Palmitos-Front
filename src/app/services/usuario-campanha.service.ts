import { Injectable } from '@angular/core';
import { GenericService } from '../components/generic-service/generic-service';
import { UsuarioCampanhaDTO } from '../dto/usuario-campanhaDTO';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from './toast.service';

@Injectable({
    providedIn: 'root',
})
export class UsuarioCampanhaService extends GenericService<UsuarioCampanhaDTO> {
    constructor(
        protected override http: HttpClient,
        private route: ActivatedRoute,
        protected toast: ToastService,
        protected router: Router,
    ) {
        super(http, 'campanhas/usuarios');
    }
}
