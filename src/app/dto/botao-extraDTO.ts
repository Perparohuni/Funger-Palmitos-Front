import { ButtonSeverity } from 'primeng/button';

export class BotaoExtraDTO<T> {
    titulo?: string = '';
    icone?: string;
    severity?: ButtonSeverity;
    acao!: (item?: T) => void;
}
