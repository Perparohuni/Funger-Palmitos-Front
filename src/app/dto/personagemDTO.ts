import { AbstractDTO } from './abstractDTO';
import { UsuarioDTO } from './usuarioDTO';

export class PersonagemDTO extends AbstractDTO {
    nome!: string;
    descricaoFisica?: string;
    historia?: string;
    observacoes?: string;
    ativo: boolean = true;
    usuario: UsuarioDTO = new UsuarioDTO();
}
