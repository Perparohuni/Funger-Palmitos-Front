import { AbstractDTO } from "./abstractDTO";

export class ColunaDTO extends AbstractDTO {
    field!: string;
    header!: string;
    type!: string;
}