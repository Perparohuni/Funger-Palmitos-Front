import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from 'primeng/card';
import { CampanhaDTO } from '../../../../dto/campanhaDTO';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { CampanhaService } from '../../../../services/campanha.service';
import { GenericForm } from '../../../../components/generic-form/generic-form';

@Component({
    selector: 'app-campanhas-form',
    imports: [Card, TagModule, FormsModule, InputText, InputTextModule, FloatLabelModule, Button, RouterLink],
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
    ) {
        super(service, router, route, cdr);
    }
}
