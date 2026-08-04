import { AbstractDTO } from "./abstractDTO";

export class LoginDTO extends AbstractDTO {
    login!: String;
    senha!: String;
}