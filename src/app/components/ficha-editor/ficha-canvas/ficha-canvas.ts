import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FichaElementoDTO } from '../../../dto/ficha-elementoDTO';
import { EnumTipoElemento } from '../../../enum/enum-tipo-elemento';

@Component({
    selector: 'app-ficha-canvas',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ficha-canvas.html',
    styleUrl: './ficha-canvas.scss',
})
export class FichaCanvas {
    @Input({ required: true })
    elementos!: FichaElementoDTO[];

    @Output()
    elementoSelecionado = new EventEmitter<FichaElementoDTO>();

    readonly tipoElemento = EnumTipoElemento;

    selecionar(elemento: FichaElementoDTO): void {
        this.elementoSelecionado.emit(elemento);
    }
}
