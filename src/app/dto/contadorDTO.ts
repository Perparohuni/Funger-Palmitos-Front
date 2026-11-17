import { AbstractDTO } from './abstractDTO';
import { SistemaDTO } from './sistemaDTO';

export class ContadorDTO extends AbstractDTO {
    sistema: SistemaDTO = new SistemaDTO();

    nome!: string;
    descricao!: string;
    maximo!: number;
    minimo!: number;
}
