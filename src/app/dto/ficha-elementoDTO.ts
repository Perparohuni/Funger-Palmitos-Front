import { EnumTipoElemento } from '../enum/enum-tipo-elemento';
import { AbstractDTO } from './abstractDTO';
import { FichaTemplateDTO } from './ficha-templateDTO';
import { FichaDTO } from './fichaDTO';

export class FichaElementoDTO extends AbstractDTO {
    fichaTemplate?: FichaTemplateDTO;
    ficha?: FichaDTO;

    posX!: number;
    posY!: number;

    largura!: number;
    altura!: number;

    tipo!: EnumTipoElemento;

    configuracao: any;
    valor: any;
}
