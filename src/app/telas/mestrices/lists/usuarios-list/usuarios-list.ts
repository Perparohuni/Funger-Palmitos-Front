import { ChangeDetectorRef, Component } from '@angular/core';
import { List } from '../../../../components/list/list';
import { GenericList } from '../../../../components/generic-list/generic-list';
import { UsuarioDTO } from '../../../../dto/usuarioDTO';
import { ColunaDTO } from '../../../../dto/colunaDTO';
import { UsuarioService } from '../../../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../services/toast.service';

@Component({
    selector: 'app-usuarios-list',
    imports: [List],
    templateUrl: './usuarios-list.html',
    styleUrl: './usuarios-list.scss',
})
export class UsuariosList extends GenericList<UsuarioDTO> {
    titulo = 'Usuários';
    override dto: UsuarioDTO[] = [];
    colunas: ColunaDTO[] = [
        { field: 'id', header: 'Id', type: 'string' },
        { field: 'login', header: 'Login', type: 'string' },
        { field: 'mestre', header: 'Mestre', type: 'boolean' },
    ];

    constructor(
        protected override service: UsuarioService,
        protected override cdr: ChangeDetectorRef,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override toast: ToastService,
    ) {
        super(service, cdr, router, route, toast, false);
    }
}
