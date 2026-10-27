import { AbstractDTO } from './abstractDTO';

export class SistemaDTO extends AbstractDTO {
    nome!: string;
    ativo: boolean = true;
}
