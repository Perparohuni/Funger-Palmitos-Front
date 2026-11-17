import { ChangeDetectorRef, Component } from '@angular/core';
import { List } from '../../../../components/list/list';
import { GenericList } from '../../../../components/generic-list/generic-list';
import { AtributoDTO } from '../../../../dto/atributoDTO';
import { ColunaDTO } from '../../../../dto/colunaDTO';
import { BotaoExtraDTO } from '../../../../dto/botao-extraDTO';
import { CampanhaService } from '../../../../services/campanha.service';
import { AtributoService } from '../../../../services/atributo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../services/toast.service';
import { EnumTipoService } from '../../../../enum/enum-tipo-service';

@Component({
    selector: 'app-atributos-list',
    imports: [List],
    templateUrl: './atributos-list.html',
    styleUrl: './atributos-list.scss',
})
export class AtributosList extends GenericList<AtributoDTO> {
    titulo = 'Atributos';
    override dto: AtributoDTO[] = [];
    colunas: ColunaDTO[] = [
        { field: 'id', header: 'Id', type: 'string' },
        { field: 'nome', header: 'Nome', type: 'string' },
        { field: 'tipoDado', header: 'Tipo de dado', type: 'string' },
        { field: 'maximo', header: 'Máximo', type: 'string' },
        { field: 'minimo', header: 'Mínimo', type: 'string' },
    ];

    constructor(
        protected override service: AtributoService,
        protected override cdr: ChangeDetectorRef,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override toast: ToastService,
    ) {
        super(service, cdr, router, route, toast, EnumTipoService.SISTEMA);
    }
}
