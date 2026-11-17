import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { GenericForm } from '../../../../../components/generic-form/generic-form';
import { ContadorDTO } from '../../../../../dto/contadorDTO';
import { ContadorService } from '../../../../../services/contador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../../services/toast.service';

@Component({
    selector: 'app-contadores-form',
    imports: [Card, TagModule, FormsModule, InputText, InputTextModule, FloatLabelModule, Button, TableModule],
    templateUrl: './contadores-form.html',
    styleUrl: './contadores-form.scss',
})
export class ContadoresForm extends GenericForm<ContadorDTO> {
    override dto: ContadorDTO = new ContadorDTO();
    titulo = 'Contador';

    constructor(
        protected override service: ContadorService,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override cdr: ChangeDetectorRef,
        protected override toast: ToastService,
    ) {
        super(service, router, route, cdr, toast);
        if (!this.id) {
            this.dto.sistema.id = parseInt(localStorage.getItem('sistema')!);
        }
    }
}
