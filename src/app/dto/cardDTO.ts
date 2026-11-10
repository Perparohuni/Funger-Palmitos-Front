import { NestedKeyOf } from '../utils/nested-keyof';

export class CardDTO<T> {
    field!: NestedKeyOf<T>;
    header!: string;
    type!: 'titulo' | 'sub-titulo' | 'extra-titulo' | 'string';
}
