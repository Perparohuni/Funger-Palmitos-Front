import { ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { GloballWrapper } from '../../components/globall-wrapper/globall-wrapper';
import { ActivatedRoute, NavigationEnd, Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ButtonDirective } from 'primeng/button';

@Component({
    selector: 'app-aventurices',
    imports: [RouterOutlet, RouterLinkWithHref, ButtonDirective, GloballWrapper],
    templateUrl: './aventurices.html',
    styleUrl: './aventurices.scss',
})
export class Aventurices {
    campanhaId?: string | null = null;
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
        this.campanhaId = this.route.firstChild?.snapshot.paramMap.get('campanha-aventureiro');
        if (this.campanhaId) {
            localStorage.setItem('campanha-aventureiro', this.campanhaId);
        }
        this.cdk.detectChanges();
    }

    limparCache() {
        localStorage.clear();
    }

    removerCampanhaId() {
        localStorage.removeItem('campanha-aventureiro');
    }
}
