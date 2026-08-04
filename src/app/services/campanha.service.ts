import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CampanhaDTO } from "../dto/campanhaDTO";
import { PageDTO } from "../dto/pageDTO";

@Injectable({
    providedIn:'root'
})
export class CampanhaService {
    private url = "http://localhost:8081/mestrices/campanhas";

    constructor(private http: HttpClient) {}

    getAll(): Observable<PageDTO<CampanhaDTO>> {
        return this.http.get<PageDTO<CampanhaDTO>>(this.url);
    }
}