import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../components/generic-service/generic-service';
import { CampanhasDTO } from '../dto/campanhasDTO';

@Injectable({
    providedIn: 'root',
})
export class CampanhaService extends GenericService<CampanhasDTO> {
    constructor(protected override http: HttpClient) {
        super(http, 'campanhas');
    }
}
