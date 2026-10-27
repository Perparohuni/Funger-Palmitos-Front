import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../../../../components/list/list';
import { GenericList } from '../../../../components/generic-list/generic-list';
import { CampanhaDTO } from '../../../../dto/campanhaDTO';
import { ColunaDTO } from '../../../../dto/colunaDTO';
import { CampanhaService } from '../../../../services/campanha.service';
import { ToastService } from '../../../../services/toast.service';
@Component({
    selector: 'app-campanhas-list',
    imports: [List],
    templateUrl: './campanhas-list.html',
    styleUrl: './campanhas-list.scss',
})
export class CampanhasList extends GenericList<CampanhaDTO> {
    titulo = 'Campanhas';
    override dto: CampanhaDTO[] = [];
    colunas: ColunaDTO[] = [
        { field: 'id', header: 'Id', type: 'string' },
        { field: 'nome', header: 'Nome', type: 'string' },
        { field: 'descricao', header: 'Descrição', type: 'text' },
        { field: 'ativo', header: 'Ativo', type: 'boolean' },
    ];

    constructor(
        protected override service: CampanhaService,
        protected override cdr: ChangeDetectorRef,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override toast: ToastService,
    ) {
        super(service, cdr, router, route, toast, true);
    }
}
