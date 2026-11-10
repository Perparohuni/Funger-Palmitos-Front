import { ChangeDetectorRef, Component } from '@angular/core';
import { CardList } from '../../../../components/card-list/card-list';
import { GenericList } from '../../../../components/generic-list/generic-list';
import { CampanhasDTO } from '../../../../dto/campanhasDTO';
import { CardDTO } from '../../../../dto/cardDTO';
import { CampanhaService } from '../../../../services/campanha.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../services/toast.service';
import { EnumTipoService } from '../../../../enum/enum-tipo-service';
import { UsuarioUtils } from '../../../../utils/usuario-utils';

@Component({
    selector: 'app-campanhas-aventureiro-list',
    imports: [CardList],
    templateUrl: './campanhas-aventureiro-list.html',
    styleUrl: './campanhas-aventureiro-list.scss',
})
export class CampanhasAventureiroList extends GenericList<CampanhasDTO> {
    titulo = 'Campanhas';
    override dto: CampanhasDTO[] = [];
    elementos: CardDTO<CampanhasDTO>[] = [
        { field: 'nome', header: 'Nome', type: 'titulo' },
        { field: 'sistema.nome', header: 'Sistema', type: 'string' },
    ];

    constructor(
        protected override service: CampanhaService,
        protected override cdr: ChangeDetectorRef,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override toast: ToastService,
        private usuarioUtil: UsuarioUtils,
    ) {
        super(service, cdr, router, route, toast, EnumTipoService.GENERICO);
    }

    override carregarListaInteira(): void {
        this.service.getByUsuario(this.usuarioUtil.getUsuarioId()!).subscribe({
            next: (dados) => {
                this.dto = dados.content;
                this.registros = dados.totalElements;
                this.cdr.detectChanges();
            },
        });
    }

    onCardClick(campanhaId: number) {
        this.router.navigate(['../' + campanhaId], { relativeTo: this.route });
    }
}
