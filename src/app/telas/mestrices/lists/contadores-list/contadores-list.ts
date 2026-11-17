import { ChangeDetectorRef, Component } from '@angular/core';
import { List } from '../../../../components/list/list';
import { GenericList } from '../../../../components/generic-list/generic-list';
import { ContadorDTO } from '../../../../dto/contadorDTO';
import { ColunaDTO } from '../../../../dto/colunaDTO';
import { ContadorService } from '../../../../services/contador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../services/toast.service';
import { EnumTipoService } from '../../../../enum/enum-tipo-service';

@Component({
    selector: 'app-contadores-list',
    imports: [List],
    templateUrl: './contadores-list.html',
    styleUrl: './contadores-list.scss',
})
export class ContadoresList extends GenericList<ContadorDTO> {
    titulo = 'Contadores';
    override dto: ContadorDTO[] = [];
    colunas: ColunaDTO[] = [
        { field: 'id', header: 'Id', type: 'string' },
        { field: 'nome', header: 'Nome', type: 'string' },
        { field: 'maximo', header: 'Valor máximo', type: 'string' },
        { field: 'minimo', header: 'Valor mínimo', type: 'string' },
    ];

    constructor(
        protected override service: ContadorService,
        protected override cdr: ChangeDetectorRef,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override toast: ToastService,
    ) {
        super(service, cdr, router, route, toast, EnumTipoService.SISTEMA);
    }
}
