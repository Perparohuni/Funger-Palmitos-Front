import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { List } from '../../../components/list/list';
import { CampanhaDTO } from '../../../dto/campanhaDTO';
import { CampanhaService } from '../../../services/campanha.service';
import { ColunaDTO } from '../../../dto/colunaDTO';
import { Router } from '@angular/router';

@Component({
    selector: 'app-campanhas-list',
    imports: [List],
    templateUrl: './campanhas-list.html',
    styleUrl: './campanhas-list.scss',
})
export class CampanhasList implements OnInit {
    campanhas: CampanhaDTO[] = [];
    colunas: ColunaDTO[] = [
        { field: 'id', header: 'Id', type: 'string' },
        { field: 'nome', header: 'Nome', type: 'string' },
        { field: 'descricao', header: 'Descrição', type: 'text' },
    ];
    constructor(
        private service: CampanhaService,
        private cdr: ChangeDetectorRef,
        private router: Router,
    ) {}

    ngOnInit() {
        this.service.getAll().subscribe({
            next: (dados) => {
                this.campanhas = dados.content;
                this.cdr.detectChanges();
            },
        });
    }

    criar() {
        this.router.navigate(['/novo']);
    }
}
