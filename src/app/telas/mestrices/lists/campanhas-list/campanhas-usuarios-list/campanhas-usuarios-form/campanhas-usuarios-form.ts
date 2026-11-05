import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Tag, TagModule } from 'primeng/tag';
import { Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Checkbox } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { GenericForm } from '../../../../../../components/generic-form/generic-form';
import { UsuarioCampanhaDTO } from '../../../../../../dto/usuario-campanhaDTO';
import { UsuarioCampanhaService } from '../../../../../../services/usuario-campanha.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../../../services/toast.service';
import { Select } from 'primeng/select';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CampanhaService } from '../../../../../../services/campanha.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UsuarioDTO } from '../../../../../../dto/usuarioDTO';
import { UsuarioService } from '../../../../../../services/usuario.service';

@Component({
    selector: 'app-campanhas-usuarios-form',
    imports: [Card, TagModule, FormsModule, InputTextModule, FloatLabelModule, Button, TableModule, AutoCompleteModule],
    templateUrl: './campanhas-usuarios-form.html',
    styleUrl: './campanhas-usuarios-form.scss',
})
export class CampanhasUsuariosForm extends GenericForm<UsuarioCampanhaDTO> {
    override dto: UsuarioCampanhaDTO = new UsuarioCampanhaDTO();
    titulo = 'Usuário da campanha';

    usuarios: UsuarioDTO[] = [];
    usuariosFiltrados: UsuarioDTO[] = [];

    constructor(
        protected override service: UsuarioCampanhaService,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override cdr: ChangeDetectorRef,
        protected override toast: ToastService,
        private campanhaService: CampanhaService,
        private usuarioService: UsuarioService,
    ) {
        super(service, router, route, cdr, toast);
    }

    override ngOnInit(): void {
        this.campanhaService
            .findById(parseInt(localStorage.getItem('campanha')!))
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (campanha) => {
                    this.dto.campanhas = campanha;
                },
            });
        this.carregarUsuarios();
    }

    carregarUsuarios() {
        this.usuarioService
            .getAll()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (usuarios) => {
                    this.usuarios = usuarios.content;
                    this.usuariosFiltrados = [...this.usuarios];
                },
            });
    }

    buscarUsuarios(event: any) {
        const pesquisa = event.query.toLowerCase();

        this.usuariosFiltrados = this.usuarios.filter((usuario) => usuario.login.toLowerCase().includes(pesquisa));
    }
}
