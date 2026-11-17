import { Injectable } from '@angular/core';
import { GenericService } from '../components/generic-service/generic-service';
import { ContadorDTO } from '../dto/contadorDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ContadorService extends GenericService<ContadorDTO> {
    constructor(protected override http: HttpClient) {
        super(http, 'contadores');
    }
}
