import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AbstractDTO } from '../../dto/abstractDTO';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { Tag } from 'primeng/tag';
import { Checkbox } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { BotaoExtraDTO } from '../../dto/botao-extraDTO';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [TableModule, ButtonModule, CardModule, DialogModule, Tag, Checkbox, FormsModule],
    templateUrl: './list.html',
    styleUrl: './list.scss',
})
export class List<T extends AbstractDTO> {
    @Input()
    dados: T[] = [];

    @Input()
    colunas: any[] = [];

    @Input()
    numeroRegistros: number = 0;

    @Input()
    titulo?: string;

    @Input()
    botoesExtras?: BotaoExtraDTO<T>[];

    @Input()
    botoesCabecalhoExtras?: BotaoExtraDTO<T>[];

    @Output()
    editar = new EventEmitter<number>();

    @Output()
    excluir = new EventEmitter<number>();

    @Output()
    criar = new EventEmitter<void>();

    texto!: string;
    idSelecao!: number;

    showCardDialog: boolean = false;
    showDialogExcluir: boolean = false;

    onCardClick(texto: string) {
        this.texto = texto;
        this.showCardDialog = !this.showCardDialog;
    }

    excluirRegistro(id: number) {
        this.idSelecao = id;
        this.showDialogExcluir = true;
    }

    obterValor(objeto: any, field: string): any {
        return field.split('.').reduce((valor, propriedade) => valor?.[propriedade], objeto);
    }
}
