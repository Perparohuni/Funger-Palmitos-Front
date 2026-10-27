import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AbstractDTO } from '../../dto/abstractDTO';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { Tag } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { CardDTO } from '../../dto/cardDTO';

@Component({
    selector: 'app-card-list',
    standalone: true,
    imports: [TableModule, ButtonModule, CardModule, DialogModule, Tag, FormsModule],
    templateUrl: './card-list.html',
    styleUrl: './card-list.scss',
})
export class CardList<T extends AbstractDTO> {
    @Input()
    cards: T[] = [];
    @Input()
    elementos: CardDTO<T>[] = [];
    @Input()
    numeroRegistros: number = 0;
    @Input()
    titulo?: string;
    @Input()
    width?: string;
    @Input()
    height?: string;
    @Input()
    clicavel?: boolean;

    @Output()
    editar = new EventEmitter<number>();

    @Output()
    excluir = new EventEmitter<number>();

    @Output()
    criar = new EventEmitter<void>();

    @Output()
    cardClick = new EventEmitter<number>();

    texto!: string;
    idSelecao!: number;

    showCardDialog: boolean = false;
    showDialogExcluir: boolean = false;

    onClick(id: number) {
        this.cardClick.emit(id);
    }

    excluirRegistro(id: number) {
        this.idSelecao = id;
        this.showDialogExcluir = true;
    }
}
