import { Injectable } from '@angular/core';
import { GenericService } from '../components/generic-service/generic-service';
import { FichaElementoDTO } from '../dto/ficha-elementoDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FichaElementoService extends GenericService<FichaElementoDTO> {
    constructor(protected override http: HttpClient) {
        super(http, 'ficha-elementos');
    }

    getAllFromTemplate(templateId: number): Observable<FichaElementoDTO[]> {
        return this.http.get<FichaElementoDTO[]>(this.endpoint + '/template/' + templateId);
    }
}
