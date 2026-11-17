import { ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CampanhaService } from '../../../services/campanha.service';
import { ToastService } from '../../../services/toast.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ButtonDirective } from 'primeng/button';

@Component({
    selector: 'app-dashboard-aventureiro',
    imports: [RouterOutlet, ButtonDirective],
    templateUrl: './dashboard-aventureiro.html',
    styleUrl: './dashboard-aventureiro.scss',
})
export class DashboardAventureiro {
    private destroyRef = inject(DestroyRef);

    constructor(
        private router: Router,
        protected route: ActivatedRoute,
        private cdk: ChangeDetectorRef,
        private campanhaService: CampanhaService,
        private toast: ToastService,
    ) {}

    ngOnInit() {
        const campanhaId = localStorage.getItem('campanha-aventureiro');
        this.campanhaService
            .findById(parseInt(campanhaId!))
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                error: () => {
                    this.toast.erro('Campanha não encontrada');
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
            });
    }

    rotear(rota: string) {
        this.router.navigate([rota], { relativeTo: this.route });
        this.cdk.detectChanges();
    }
}
