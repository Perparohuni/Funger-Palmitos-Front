import { ChangeDetectorRef, DestroyRef, Directive, inject } from '@angular/core';
import { AbstractDTO } from '../../dto/abstractDTO';
import { GenericService } from '../generic-service/generic-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive()
export abstract class GenericList<DTO extends AbstractDTO> {
    protected registros: number = 0;
    protected sistemaId?: string | null;
    abstract dto: DTO[];

    private readonly destroyRef = inject(DestroyRef);

    constructor(
        protected service: GenericService<DTO>,
        protected cdr: ChangeDetectorRef,
        protected router: Router,
        protected route: ActivatedRoute,
        protected toast: ToastService,
        protected doSistema: boolean,
    ) {}

    ngOnInit() {
        if (this.service) {
            this.load();
        }
    }

    load() {
        if (this.doSistema) {
            this.carregarListaSistema();
        } else {
            this.carregarListaInteira();
        }
    }

    carregarListaSistema() {
        const sistemaId = localStorage.getItem('sistema');
        if (!sistemaId) {
            this.toast.erro('Sistema não encontrado');
            this.router.navigate(['../../'], { relativeTo: this.route });
        } else {
            this.service
                .getAllFromSistema(parseInt(sistemaId))
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe({
                    next: (dados) => {
                        this.dto = dados.content;
                        this.registros = dados.totalElements;
                        this.cdr.detectChanges();
                    },
                });
        }
    }

    carregarListaInteira() {
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
                this.toast.aviso('Excluído com sucesso!');
                this.load();
            },
        });
    }
}
