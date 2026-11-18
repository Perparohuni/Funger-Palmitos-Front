import { AbstractDTO } from './abstractDTO';
import { FichaElementoDTO } from './ficha-elementoDTO';
import { FichaTemplateDTO } from './ficha-templateDTO';
import { UsuarioDTO } from './usuarioDTO';

export class FichaDTO extends AbstractDTO {
    fichaTemlate: FichaTemplateDTO = new FichaTemplateDTO();
    usuario: UsuarioDTO = new UsuarioDTO();
    nome!: string;
    ativo: boolean = true;

    elementos: FichaElementoDTO[] = [];
}
