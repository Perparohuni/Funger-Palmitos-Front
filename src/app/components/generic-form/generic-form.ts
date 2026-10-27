import { ChangeDetectorRef, DestroyRef, Directive, inject, Output } from '@angular/core';
import { AbstractDTO } from '../../dto/abstractDTO';
import { GenericService } from '../generic-service/generic-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive()
export abstract class GenericForm<DTO extends AbstractDTO> {
    dto!: DTO;
    id: string | null;

    private readonly destroyRef = inject(DestroyRef);

    constructor(
        protected service: GenericService<DTO>,
        protected router: Router,
        protected route: ActivatedRoute,
        protected cdr: ChangeDetectorRef,
        protected toast: ToastService,
    ) {
        this.id = route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        if (this.id) {
            this.service
                .findById(parseInt(this.id))
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe({
                    next: (data) => {
                        this.dto = data;
                        this.cdr.detectChanges();
                    },
                });
        }
    }

    salvar() {
        this.service
            .save(this.dto)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (data) => {
                    this.toast.sucesso('Criado com sucesso!');
                    this.router.navigate(['../', data.id], { relativeTo: this.route });
                },
            });
    }

    editar() {
        this.toast.sucesso('Editado com sucesso!');
        this.service.update(this.dto).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({});
    }

    goList() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}
