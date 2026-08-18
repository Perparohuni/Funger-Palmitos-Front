import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AbstractDTO } from '../../dto/abstractDTO';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [TableModule, ButtonModule, CardModule, DialogModule],
    templateUrl: './list.html',
    styleUrl: './list.scss',
})
export class List<T extends AbstractDTO> {
    @Input()
    dados: T[] = [];

    @Input()
    colunas: any[] = [];

    @Input()
    totalRecords: number = 0;

    @Output()
    editar = new EventEmitter<number>();

    @Output()
    excluir = new EventEmitter<number>();

    @Output()
    criar = new EventEmitter<void>();

    texto!: string;
    showCardDialog: boolean = false;

    onCardClick(texto: string) {
        this.texto = texto;
        this.showCardDialog = !this.showCardDialog;
    }
}
