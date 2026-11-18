import { Injectable } from '@angular/core';
import { GenericService } from '../components/generic-service/generic-service';
import { FichaTemplateDTO } from '../dto/ficha-templateDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FichaTemplateService extends GenericService<FichaTemplateDTO> {
    constructor(protected override http: HttpClient) {
        super(http, 'ficha-templates');
    }
}
