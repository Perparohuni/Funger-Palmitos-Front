import { AbstractDTO } from './abstractDTO';

export class UsuarioDTO extends AbstractDTO {
    login!: String;
    senha!: string;
    mestre!: boolean;
}
