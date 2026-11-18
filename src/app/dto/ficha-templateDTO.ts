import { AbstractDTO } from './abstractDTO';
import { FichaElementoDTO } from './ficha-elementoDTO';
import { SistemaDTO } from './sistemaDTO';

export class FichaTemplateDTO extends AbstractDTO {
    sistema: SistemaDTO = new SistemaDTO();
    nome!: string;
    ativo: boolean = true;

    elementos: FichaElementoDTO[] = [];
}
