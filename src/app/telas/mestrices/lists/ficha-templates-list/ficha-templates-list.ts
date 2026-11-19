import { ChangeDetectorRef, Component } from '@angular/core';
import { CardList } from '../../../../components/card-list/card-list';
import { GenericList } from '../../../../components/generic-list/generic-list';
import { FichaTemplateDTO } from '../../../../dto/ficha-templateDTO';
import { CardDTO } from '../../../../dto/cardDTO';
import { FichaTemplateService } from '../../../../services/ficha_template.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../services/toast.service';
import { EnumTipoService } from '../../../../enum/enum-tipo-service';

@Component({
    selector: 'app-ficha-templates-list',
    imports: [CardList],
    templateUrl: './ficha-templates-list.html',
    styleUrl: './ficha-templates-list.scss',
})
export class FichaTemplatesList extends GenericList<FichaTemplateDTO> {
    titulo = 'Templates de fichas';
    override dto: FichaTemplateDTO[] = [];
    elementos: CardDTO<FichaTemplateDTO>[] = [{ field: 'nome', header: 'Nome', type: 'titulo' }];

    constructor(
        protected override service: FichaTemplateService,
        protected override cdr: ChangeDetectorRef,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override toast: ToastService,
    ) {
        super(service, cdr, router, route, toast, EnumTipoService.SISTEMA);
    }

    onCardClick(fichaTemplateId: number) {
        this.router.navigate([fichaTemplateId + '/editor'], { relativeTo: this.route });
    }
}
