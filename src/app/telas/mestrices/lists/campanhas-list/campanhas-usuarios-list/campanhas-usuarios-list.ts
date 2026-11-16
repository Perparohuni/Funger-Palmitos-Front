import { ChangeDetectorRef, Component } from '@angular/core';
import { List } from '../../../../../components/list/list';
import { GenericList } from '../../../../../components/generic-list/generic-list';
import { UsuarioCampanhaDTO } from '../../../../../dto/usuario-campanhaDTO';
import { ColunaDTO } from '../../../../../dto/colunaDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../../services/toast.service';
import { UsuarioCampanhaService } from '../../../../../services/usuario-campanha.service';
import { EnumTipoService } from '../../../../../enum/enum-tipo-service';
import { BotaoExtraDTO } from '../../../../../dto/botao-extraDTO';

@Component({
    selector: 'app-campanhas-usuarios-list',
    imports: [List],
    templateUrl: './campanhas-usuarios-list.html',
    styleUrl: './campanhas-usuarios-list.scss',
})
export class CampanhasUsuariosList extends GenericList<UsuarioCampanhaDTO> {
    titulo = 'Usuários na campanha';
    override dto: UsuarioCampanhaDTO[] = [];
    colunas: ColunaDTO[] = [{ field: 'usuario.login', header: 'Usuário', type: 'string' }];

    botoesCabecalhoExtras: BotaoExtraDTO<UsuarioCampanhaDTO>[] = [
        { severity: 'info', icone: 'pi pi-arrow-left', acao: () => this.voltar() },
    ];

    constructor(
        protected override service: UsuarioCampanhaService,
        protected override cdr: ChangeDetectorRef,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override toast: ToastService,
    ) {
        super(service, cdr, router, route, toast, EnumTipoService.CAMPANHA);
    }

    voltar() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
}
