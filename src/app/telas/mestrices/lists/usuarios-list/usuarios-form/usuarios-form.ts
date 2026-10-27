import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Button } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Checkbox } from 'primeng/checkbox';
import { GenericForm } from '../../../../../components/generic-form/generic-form';
import { UsuarioDTO } from '../../../../../dto/usuarioDTO';
import { UsuarioService } from '../../../../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../../services/toast.service';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputText, InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-usuarios-form',
    imports: [
        Card,
        TagModule,
        FormsModule,
        InputText,
        InputTextModule,
        FloatLabelModule,
        Button,
        Checkbox,
        TableModule,
    ],
    templateUrl: './usuarios-form.html',
    styleUrl: './usuarios-form.scss',
})
export class UsuariosForm extends GenericForm<UsuarioDTO> {
    override dto: UsuarioDTO = new UsuarioDTO();
    titulo = 'Usuário';

    constructor(
        protected override service: UsuarioService,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override cdr: ChangeDetectorRef,
        protected override toast: ToastService,
    ) {
        super(service, router, route, cdr, toast);
    }
}
