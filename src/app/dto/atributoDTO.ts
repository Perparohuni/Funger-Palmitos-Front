import { EnumTipoDado } from '../enum/enum-tipo-dado';
import { AbstractDTO } from './abstractDTO';
import { SistemaDTO } from './sistemaDTO';

export class AtributoDTO extends AbstractDTO {
    sistema: SistemaDTO = new SistemaDTO();

    nome!: string;
    descricao!: string;
    maximo!: number;
    minimo!: number;

    tipoDado!: EnumTipoDado;
    valorMaximoDado!: number;
    valorMinimoDado!: number;
}
