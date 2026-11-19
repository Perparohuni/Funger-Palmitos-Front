import { ChangeDetectorRef, Component } from '@angular/core';
import { FichaTemplateDTO } from '../../dto/ficha-templateDTO';
import { FichaElementoDTO } from '../../dto/ficha-elementoDTO';
import { ActivatedRoute } from '@angular/router';
import { FichaTemplateService } from '../../services/ficha_template.service';
import { Toolbar } from 'primeng/toolbar';
import { Button } from 'primeng/button';
import { FichaCanvas } from './ficha-canvas/ficha-canvas';
import { FichaElementoService } from '../../services/ficha_elemento.service';

@Component({
    selector: 'app-ficha-editor',
    imports: [Toolbar, Button, FichaCanvas],
    templateUrl: './ficha-editor.html',
    styleUrl: './ficha-editor.scss',
})
export class FichaEditor {
    template!: FichaTemplateDTO;

    elementos: FichaElementoDTO[] = [];
    elementoSelecionado?: FichaElementoDTO;

    constructor(
        private route: ActivatedRoute,
        private fichaTemplateService: FichaTemplateService,
        private fichaElementoService: FichaElementoService,
        private cdk: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));

        this.fichaTemplateService.findById(id).subscribe({
            next: (res) => {
                this.template = res;
                this.fichaElementoService.getAllFromTemplate(res.id!).subscribe({
                    next: (data) => {
                        this.elementos = data;
                        this.cdk.detectChanges();
                    },
                    error: (err) => console.error(err),
                });
            },
            error: (err) => console.error(err),
        });
    }

    selecionarElemento(elemento: FichaElementoDTO): void {
        this.elementoSelecionado = elemento;
    }
}
