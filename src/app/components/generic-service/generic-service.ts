import { HttpClient } from '@angular/common/http';
import { AbstractDTO } from '../../dto/abstractDTO';
import { Observable } from 'rxjs';
import { PageDTO } from '../../dto/pageDTO';
import { environment } from '../../../environment/environment';
import { inject } from '@angular/core';
import { UsuarioUtils } from '../../utils/usuario-utils';

export abstract class GenericService<DTO extends AbstractDTO> {
    protected usuarioUtils: UsuarioUtils = inject(UsuarioUtils);

    constructor(
        protected http: HttpClient,
        protected rota: string,
    ) {}

    protected get endpoint(): string {
        if (this.usuarioUtils.ehMestre()) {
            return environment.urlMestrices + '/' + this.rota;
        } else {
            return environment.urlAventurices + '/' + this.rota;
        }
    }

    findById(id: number): Observable<DTO> {
        return this.http.get<DTO>(this.endpoint + '/' + id);
    }

    getAll(): Observable<PageDTO<DTO>> {
        return this.http.get<PageDTO<DTO>>(this.endpoint);
    }

    getAllFromSistema(sistemaId: number): Observable<PageDTO<DTO>> {
        return this.http.get<PageDTO<DTO>>(this.endpoint + '/' + 'sistema' + '/' + sistemaId);
    }

    getAllFromCampanha(campanhaId: number): Observable<PageDTO<DTO>> {
        return this.http.get<PageDTO<DTO>>(this.endpoint + '/' + 'campanha' + '/' + campanhaId);
    }

    save(dto: DTO): Observable<DTO> {
        return this.http.post<DTO>(this.endpoint, dto);
    }

    update(dto: DTO): Observable<DTO> {
        return this.http.put<DTO>(this.endpoint, dto);
    }

    delete(id: number): Observable<DTO> {
        return this.http.delete<DTO>(this.endpoint + '/' + id);
    }
}
