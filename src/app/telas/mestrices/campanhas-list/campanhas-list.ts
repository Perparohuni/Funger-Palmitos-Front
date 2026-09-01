import { ChangeDetectorRef, Component } from '@angular/core';
import { List } from '../../../components/list/list';
import { CampanhaService } from '../../../services/campanha.service';
import { ColunaDTO } from '../../../dto/colunaDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericList } from '../../../components/generic-list/generic-list';
import { CampanhaDTO } from '../../../dto/campanhaDTO';
import { ToastService } from '../../../services/toast.service';

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
    ];

    constructor(
        protected override service: CampanhaService,
        protected override cdr: ChangeDetectorRef,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override toast: ToastService,
    ) {
        super(service, cdr, router, route, toast);
    }
}
