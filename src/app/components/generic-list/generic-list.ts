import { ChangeDetectorRef, Component, Directive } from '@angular/core';
import { AbstractDTO } from '../../dto/abstractDTO';
import { GenericService } from '../generic-service/generic-service';
import { ActivatedRoute, Router } from '@angular/router';

@Directive()
export abstract class GenericList<DTO extends AbstractDTO> {
    protected registros: number = 0;
    abstract dto: DTO[];

    constructor(
        protected service: GenericService<DTO>,
        protected cdr: ChangeDetectorRef,
        protected router: Router,
        protected route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.carregarLista();
    }

    carregarLista() {
        this.service.getAll().subscribe({
            next: (dados) => {
                this.dto = dados.content;
                this.registros = dados.totalElements;
                this.cdr.detectChanges();
            },
        });
    }

    criar() {
        this.router.navigate(['novo'], { relativeTo: this.route });
    }
    editar(id: number) {
        this.router.navigate([id], { relativeTo: this.route });
    }

    excluir(id: number) {
        this.service.delete(id).subscribe({
            next: () => {
                this.carregarLista();
            },
        });
    }
}
