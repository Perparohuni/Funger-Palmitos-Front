import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Checkbox } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { GenericForm } from '../../../../../components/generic-form/generic-form';
import { PersonagemDTO } from '../../../../../dto/personagemDTO';
import { PersonagemService } from '../../../../../services/personagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../../services/toast.service';
import { UsuarioUtils } from '../../../../../utils/usuario-utils';

@Component({
    selector: 'app-personagens-form',
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
    templateUrl: './personagens-form.html',
    styleUrl: './personagens-form.scss',
})
export class PersonagensForm extends GenericForm<PersonagemDTO> {
    override dto: PersonagemDTO = new PersonagemDTO();
    titulo = 'Personagem';

    constructor(
        protected override service: PersonagemService,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override cdr: ChangeDetectorRef,
        protected override toast: ToastService,
        private usuarioUtil: UsuarioUtils,
    ) {
        super(service, router, route, cdr, toast);
    }

    override salvar(): void {
        this.dto.usuario.id = this.usuarioUtil.getUsuarioId();
        console.log(this.dto);
        super.salvar();
    }
}
