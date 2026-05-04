import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginDTO } from "../dto/loginDTO";

@Injectable({
    providedIn:'root'
})
export class LoginService {
    private url = "http://localhost:8081/login";

    constructor(private http: HttpClient) {}

    login(login: LoginDTO) {
        return this.http.post(this.url, login);
    }
}