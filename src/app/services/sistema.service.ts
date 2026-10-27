import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CampanhaDTO } from '../dto/campanhaDTO';
import { GenericService } from '../components/generic-service/generic-service';
import { SistemaDTO } from '../dto/sistemaDTO';

@Injectable({
    providedIn: 'root',
})
export class SistemaService extends GenericService<SistemaDTO> {
    constructor(protected override http: HttpClient) {
        super(http, 'sistemas');
    }
}
