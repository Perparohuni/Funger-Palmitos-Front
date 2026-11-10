import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../components/generic-service/generic-service';
import { CampanhasDTO } from '../dto/campanhasDTO';
import { Observable } from 'rxjs';
import { PageDTO } from '../dto/pageDTO';

@Injectable({
    providedIn: 'root',
})
export class CampanhaService extends GenericService<CampanhasDTO> {
    constructor(protected override http: HttpClient) {
        super(http, 'campanhas');
    }

    getByUsuario(usuarioId: number): Observable<PageDTO<CampanhasDTO>> {
        return this.http.get<PageDTO<CampanhasDTO>>(this.endpoint + '/usuario/' + usuarioId);
    }
}
