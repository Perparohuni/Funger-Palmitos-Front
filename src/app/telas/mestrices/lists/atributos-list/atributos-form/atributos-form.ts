import { ChangeDetectorRef, Component } from '@angular/core';
import { GenericForm } from '../../../../../components/generic-form/generic-form';
import { AtributoDTO } from '../../../../../dto/atributoDTO';
import { AtributoService } from '../../../../../services/atributo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../../services/toast.service';
import { Card } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { EnumTipoDado } from '../../../../../enum/enum-tipo-dado';
import { Select } from 'primeng/select';

@Component({
    selector: 'app-atributos-form',
    imports: [Card, TagModule, FormsModule, InputText, InputTextModule, FloatLabelModule, Button, TableModule, Select],
    templateUrl: './atributos-form.html',
    styleUrl: './atributos-form.scss',
})
export class AtributosForm extends GenericForm<AtributoDTO> {
    override dto: AtributoDTO = new AtributoDTO();
    titulo = 'Atributo';

    tiposDado: EnumTipoDado[] = [
        EnumTipoDado.D4,
        EnumTipoDado.D6,
        EnumTipoDado.D8,
        EnumTipoDado.D10,
        EnumTipoDado.D12,
        EnumTipoDado.D20,
        EnumTipoDado.D100,
    ];

    constructor(
        protected override service: AtributoService,
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
