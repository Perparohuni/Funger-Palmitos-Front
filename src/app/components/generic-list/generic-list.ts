import { ChangeDetectorRef, DestroyRef, Directive, inject } from '@angular/core';
import { AbstractDTO } from '../../dto/abstractDTO';
import { GenericService } from '../generic-service/generic-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EnumTipoService } from '../../enum/enum-tipo-service';

@Directive()
export abstract class GenericList<DTO extends AbstractDTO> {
    protected registros: number = 0;
    abstract dto: DTO[];

    protected readonly destroyRef = inject(DestroyRef);

    constructor(
        protected service: GenericService<DTO>,
        protected cdr: ChangeDetectorRef,
        protected router: Router,
        protected route: ActivatedRoute,
        protected toast: ToastService,
        protected tipoService: EnumTipoService,
    ) {}

    ngOnInit() {
        if (this.service) {
            this.load();
        }
    }

    load() {
        switch (this.tipoService) {
            case EnumTipoService.GENERICO:
                this.carregarListaInteira();
                break;
            case EnumTipoService.SISTEMA:
                this.carregarListaSistema();
                break;
            case EnumTipoService.CAMPANHA:
                this.carregarListaCampanha();
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
    carregarListaCampanha() {
        const campanhaId = localStorage.getItem('campanha-mestre');
        if (!campanhaId) {
            this.toast.erro('Campanha não encontrada');
            this.router.navigate(['../../'], { relativeTo: this.route });
        } else {
            this.service
                .getAllFromCampanha(parseInt(campanhaId))
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
