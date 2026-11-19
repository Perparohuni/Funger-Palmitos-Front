import { AbstractDTO } from './abstractDTO';
import { SistemaDTO } from './sistemaDTO';

export class FichaTemplateDTO extends AbstractDTO {
    sistema: SistemaDTO = new SistemaDTO();
    nome!: string;
    ativo: boolean = true;
}
