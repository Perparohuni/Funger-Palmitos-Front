export class CardDTO<T> {
    field!: keyof T;
    header!: string;
    type!: 'titulo' | 'sub-titulo' | 'extra-titulo' | 'string';
}
