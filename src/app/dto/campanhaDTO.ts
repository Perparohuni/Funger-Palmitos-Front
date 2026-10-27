import { AbstractDTO } from './abstractDTO';
import { SistemaDTO } from './sistemaDTO';

export class CampanhaDTO extends AbstractDTO {
    nome!: string;
    descricao!: string;
    ativo: boolean = true;
    sistema!: SistemaDTO;
}
