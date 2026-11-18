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
import { FichaTemplateDTO } from '../../../../../dto/ficha-templateDTO';
import { FichaTemplateService } from '../../../../../services/ficha_template.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../../services/toast.service';
import { SistemaDTO } from '../../../../../dto/sistemaDTO';

@Component({
    selector: 'app-ficha-templates-form',
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
    templateUrl: './ficha-templates-form.html',
    styleUrl: './ficha-templates-form.scss',
})
export class FichaTemplatesForm extends GenericForm<FichaTemplateDTO> {
    override dto: FichaTemplateDTO = new FichaTemplateDTO();
    titulo = 'Template';

    constructor(
        protected override service: FichaTemplateService,
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
