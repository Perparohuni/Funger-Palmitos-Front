import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CampanhaDTO } from '../dto/campanhaDTO';
import { PageDTO } from '../dto/pageDTO';
import { GenericService } from '../components/generic-service/generic-service';

@Injectable({
    providedIn: 'root',
})
export class CampanhaService extends GenericService<CampanhaDTO> {
    constructor(protected override http: HttpClient) {
        super(http, 'campanhas');
    }
}
