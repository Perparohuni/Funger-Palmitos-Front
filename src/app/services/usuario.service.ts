import { Injectable } from '@angular/core';
import { GenericService } from '../components/generic-service/generic-service';
import { UsuarioDTO } from '../dto/usuarioDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService extends GenericService<UsuarioDTO> {
    constructor(protected override http: HttpClient) {
        super(http, 'usuarios');
    }
}
