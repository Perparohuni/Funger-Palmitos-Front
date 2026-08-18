import { AbstractDTO } from './abstractDTO';

export class CampanhaDTO extends AbstractDTO {
    nome!: string;
    descricao!: string;
    ativo: boolean = true;
}
