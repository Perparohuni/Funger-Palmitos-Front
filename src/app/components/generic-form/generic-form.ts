import { ChangeDetectorRef, Directive } from '@angular/core';
import { AbstractDTO } from '../../dto/abstractDTO';
import { GenericService } from '../generic-service/generic-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Directive()
export abstract class GenericForm<DTO extends AbstractDTO> {
    dto!: DTO;
    id: string | null;

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
            this.service.findById(parseInt(this.id)).subscribe({
                next: (data) => {
                    this.dto = data;
                    this.cdr.detectChanges();
                },
            });
        }
    }

    salvar() {
        this.service.save(this.dto).subscribe({
            next: (data) => {
                this.toast.sucesso('Criado com sucesso!');
                this.router.navigate(['../', data.id], { relativeTo: this.route });
            },
        });
    }

    editar() {
        this.toast.sucesso('Editado com sucesso!');
        this.service.update(this.dto).subscribe({});
    }

    goList() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}
