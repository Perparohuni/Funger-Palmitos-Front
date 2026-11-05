import { AbstractDTO } from './abstractDTO';
import { CampanhasDTO } from './campanhasDTO';
import { UsuarioDTO } from './usuarioDTO';

export class UsuarioCampanhaDTO extends AbstractDTO {
    campanhas!: CampanhasDTO;
    usuario!: UsuarioDTO;
}
