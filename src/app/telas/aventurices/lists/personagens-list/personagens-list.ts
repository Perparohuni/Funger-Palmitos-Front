import { ChangeDetectorRef, Component } from '@angular/core';
import { GenericList } from '../../../../components/generic-list/generic-list';
import { PersonagemDTO } from '../../../../dto/personagemDTO';
import { CardDTO } from '../../../../dto/cardDTO';
import { PersonagemService } from '../../../../services/personagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../services/toast.service';
import { UsuarioUtils } from '../../../../utils/usuario-utils';
import { EnumTipoService } from '../../../../enum/enum-tipo-service';
import { CardList } from '../../../../components/card-list/card-list';

@Component({
    selector: 'app-personagens-list',
    imports: [CardList],
    templateUrl: './personagens-list.html',
    styleUrl: './personagens-list.scss',
})
export class PersonagensList extends GenericList<PersonagemDTO> {
    titulo = 'Personagens';
    override dto: PersonagemDTO[] = [];
    elementos: CardDTO<PersonagemDTO>[] = [
        { field: 'nome', header: 'Nome', type: 'titulo' },
        { field: 'observacoes', header: 'Observações', type: 'string' },
    ];

    constructor(
        protected override service: PersonagemService,
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

    onCardClick(personagemId: number) {
        this.router.navigate([personagemId], { relativeTo: this.route });
    }
}
