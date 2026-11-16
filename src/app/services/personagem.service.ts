import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../components/generic-service/generic-service';
import { CampanhasDTO } from '../dto/campanhasDTO';
import { Observable } from 'rxjs';
import { PageDTO } from '../dto/pageDTO';
import { PersonagemDTO } from '../dto/personagemDTO';

@Injectable({
    providedIn: 'root',
})
export class PersonagemService extends GenericService<PersonagemDTO> {
    constructor(protected override http: HttpClient) {
        super(http, 'personagens');
    }

    getByUsuario(usuarioId: number): Observable<PageDTO<PersonagemDTO>> {
        return this.http.get<PageDTO<PersonagemDTO>>(this.endpoint + '/usuario/' + usuarioId);
    }
}
