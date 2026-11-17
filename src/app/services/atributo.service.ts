import { Injectable } from '@angular/core';
import { GenericService } from '../components/generic-service/generic-service';
import { AtributoDTO } from '../dto/atributoDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AtributoService extends GenericService<AtributoDTO> {
    constructor(protected override http: HttpClient) {
        super(http, 'atributos');
    }
}
