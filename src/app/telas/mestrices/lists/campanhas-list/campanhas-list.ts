import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../../../../components/list/list';
import { GenericList } from '../../../../components/generic-list/generic-list';
import { ColunaDTO } from '../../../../dto/colunaDTO';
import { CampanhaService } from '../../../../services/campanha.service';
import { ToastService } from '../../../../services/toast.service';
import { BotaoExtraDTO } from '../../../../dto/botao-extraDTO';
import { EnumTipoService } from '../../../../enum/enum-tipo-service';
import { CampanhasDTO } from '../../../../dto/campanhasDTO';
@Component({
    selector: 'app-campanhas-list',
    imports: [List],
    templateUrl: './campanhas-list.html',
    styleUrl: './campanhas-list.scss',
})
export class CampanhasList extends GenericList<CampanhasDTO> {
    titulo = 'Campanhas';
    override dto: CampanhasDTO[] = [];
    colunas: ColunaDTO[] = [
        { field: 'id', header: 'Id', type: 'string' },
        { field: 'nome', header: 'Nome', type: 'string' },
        { field: 'descricao', header: 'Descrição', type: 'text' },
        { field: 'ativo', header: 'Ativo', type: 'boolean' },
    ];

    botoesExtras: BotaoExtraDTO<CampanhasDTO>[] = [
        { severity: 'help', icone: 'pi pi-users', acao: (campanha) => this.editarUsuarios(campanha!.id!) },
    ];

    constructor(
        protected override service: CampanhaService,
        protected override cdr: ChangeDetectorRef,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override toast: ToastService,
    ) {
        super(service, cdr, router, route, toast, EnumTipoService.SISTEMA);
    }

    editarUsuarios(id: number) {
        localStorage.setItem('campanha-mestre', String(id));
        this.router.navigate([id + '/usuarios'], { relativeTo: this.route });
    }
}
