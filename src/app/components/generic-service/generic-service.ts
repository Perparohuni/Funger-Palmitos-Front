import { HttpClient } from '@angular/common/http';
import { AbstractDTO } from '../../dto/abstractDTO';
import { Observable } from 'rxjs';
import { PageDTO } from '../../dto/pageDTO';
import { environment } from '../../../environment/environment';
export abstract class GenericService<DTO extends AbstractDTO> {
    protected readonly endpoint: string;

    constructor(
        protected http: HttpClient,
        rota: string,
    ) {
        this.endpoint = environment.urlMestrices + '/' + rota;
    }

    findById(id: number): Observable<DTO> {
        return this.http.get<DTO>(this.endpoint + '/' + id);
    }

    getAll(): Observable<PageDTO<DTO>> {
        return this.http.get<PageDTO<DTO>>(this.endpoint);
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
