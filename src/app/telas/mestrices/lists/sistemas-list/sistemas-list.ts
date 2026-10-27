import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardList } from '../../../../components/card-list/card-list';
import { GenericList } from '../../../../components/generic-list/generic-list';
import { SistemaDTO } from '../../../../dto/sistemaDTO';
import { SistemaService } from '../../../../services/sistema.service';
import { ToastService } from '../../../../services/toast.service';
import { CardDTO } from '../../../../dto/cardDTO';

@Component({
    selector: 'app-sistemas-list',
    imports: [CardList],
    templateUrl: './sistemas-list.html',
    styleUrl: './sistemas-list.scss',
})
export class SistemasList extends GenericList<SistemaDTO> {
    titulo = 'Sistemas';
    override dto: SistemaDTO[] = [];
    elementos: CardDTO<SistemaDTO>[] = [{ field: 'nome', header: 'Nome', type: 'titulo' }];

    constructor(
        protected override service: SistemaService,
        protected override cdr: ChangeDetectorRef,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override toast: ToastService,
    ) {
        super(service, cdr, router, route, toast, false);
    }

    onCardClick(sistemaId: number) {
        this.router.navigate(['../' + sistemaId], { relativeTo: this.route });
    }
}
