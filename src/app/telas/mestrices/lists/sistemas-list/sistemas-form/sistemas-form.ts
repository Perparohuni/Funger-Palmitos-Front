import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { Checkbox } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { GenericForm } from '../../../../../components/generic-form/generic-form';
import { SistemaDTO } from '../../../../../dto/sistemaDTO';
import { SistemaService } from '../../../../../services/sistema.service';
import { ToastService } from '../../../../../services/toast.service';

@Component({
    selector: 'app-campanhas-form',
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
    templateUrl: './sistemas-form.html',
    styleUrl: './sistemas-form.scss',
})
export class SistemasForm extends GenericForm<SistemaDTO> {
    override dto: SistemaDTO = new SistemaDTO();
    titulo = 'Sistemas';

    constructor(
        protected override service: SistemaService,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override cdr: ChangeDetectorRef,
        protected override toast: ToastService,
    ) {
        super(service, router, route, cdr, toast);
    }
}
