import { ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { SistemaService } from '../../../services/sistema.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToastService } from '../../../services/toast.service';

@Component({
    selector: 'app-dashboard-mestre',
    imports: [ButtonDirective, RouterOutlet],
    templateUrl: './dashboard-mestre.html',
    styleUrl: './dashboard-mestre.scss',
})
export class DashboardMestre {
    private destroyRef = inject(DestroyRef);

    constructor(
        private router: Router,
        protected route: ActivatedRoute,
        private cdk: ChangeDetectorRef,
        private sistemaService: SistemaService,
        private toast: ToastService,
    ) {}

    ngOnInit() {
        const sistemaId = localStorage.getItem('sistema');
        this.sistemaService
            .findById(parseInt(sistemaId!))
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                error: () => {
                    this.toast.erro('Sistema não encontrado');
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
            });
    }

    rotear(rota: string) {
        this.router.navigate([rota], { relativeTo: this.route });
        this.cdk.detectChanges();
    }
}
