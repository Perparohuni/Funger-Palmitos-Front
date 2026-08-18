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

@Component({
    selector: 'app-campanhas-form',
    imports: [Card, TagModule, FormsModule, InputText, InputTextModule, FloatLabelModule, Button, RouterLink],
    templateUrl: './campanhas-form.html',
    styleUrl: './campanhas-form.scss',
})
export class CampanhasForm {
    dto: CampanhaDTO = new CampanhaDTO();
    titulo = 'Campanhas';
    id: string | null;

    constructor(
        private service: CampanhaService,
        private router: Router,
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef,
    ) {
        this.id = route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        if (this.id) {
            this.service.findById(parseInt(this.id)).subscribe({
                next: (data) => {
                    this.dto = data;
                    this.cdr.detectChanges();
                },
            });
        }
    }

    salvar() {
        console.log(this.dto);
        this.service.save(this.dto).subscribe({
            next: (data) => {
                this.router.navigate(['/mestrices/campanhasList/' + data.id]);
            },
        });
    }
}
