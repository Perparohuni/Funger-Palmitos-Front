import { ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { GloballWrapper } from '../../components/globall-wrapper/globall-wrapper';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-mestrices',
    imports: [RouterOutlet, RouterLinkWithHref, ButtonDirective, GloballWrapper],
    templateUrl: './mestrices.html',
    styleUrl: './mestrices.scss',
})
export class Mestrices {
    sistemaId?: string | null = null;
    destroyRef = inject(DestroyRef);

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private cdk: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => {
                this.atualizarComponente();
            });
    }

    atualizarComponente() {
        this.sistemaId = this.route.firstChild?.snapshot.paramMap.get('sistema');
        if (this.sistemaId) {
            localStorage.setItem('sistema', this.sistemaId);
        }
        this.cdk.detectChanges();
    }

    limparCache() {
        localStorage.clear();
    }

    removerIdSistema() {
        localStorage.removeItem('sistema');
    }
}
