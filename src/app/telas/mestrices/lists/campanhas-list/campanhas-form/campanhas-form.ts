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
import { CampanhaDTO } from '../../../../../dto/campanhaDTO';
import { CampanhaService } from '../../../../../services/campanha.service';
import { ToastService } from '../../../../../services/toast.service';
import { SistemaDTO } from '../../../../../dto/sistemaDTO';

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
    templateUrl: './campanhas-form.html',
    styleUrl: './campanhas-form.scss',
})
export class CampanhasForm extends GenericForm<CampanhaDTO> {
    override dto: CampanhaDTO = new CampanhaDTO();
    titulo = 'Campanhas';

    constructor(
        protected override service: CampanhaService,
        protected override router: Router,
        protected override route: ActivatedRoute,
        protected override cdr: ChangeDetectorRef,
        protected override toast: ToastService,
    ) {
        super(service, router, route, cdr, toast);
        if (!this.id) {
            this.dto.sistema = new SistemaDTO();
            this.dto.sistema.id = parseInt(localStorage.getItem('sistema')!);
        }
    }
}
