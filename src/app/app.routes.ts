import { Routes } from '@angular/router';
import { Login } from './telas/login/login';
import { DashboardMestre } from './telas/mestrices/dashboard-mestre/dashboard-mestre';
import { Campanhas } from './telas/campanhas/campanhas';
import { CampanhasList } from './telas/mestrices/campanhas-list/campanhas-list';
import { Mestrices } from './telas/mestrices/mestrices';
import { mestreGuard } from './guards/mestre-guard';
import { Perdido } from './rota-errada/perdido/perdido';
import { Trapaceiro } from './rota-errada/trapaceiro/trapaceiro';
import { CampanhasForm } from './telas/mestrices/campanhas-list/campanhas-form/campanhas-form';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },

    {
        path: 'mestrices',
        component: Mestrices,
        canActivate: [mestreGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboardMestre',
                pathMatch: 'full',
            },
            {
                path: 'dashboardMestre',
                component: DashboardMestre,
            },

            { path: 'campanhasList', component: CampanhasList },
            { path: 'campanhasList/novo', component: CampanhasForm },
            { path: 'campanhasList/:id', component: CampanhasForm },
        ],
    },

    { path: 'campanhas', component: Campanhas },

    { path: 'trapaceiro', component: Trapaceiro },

    { path: 'perdido', component: Perdido },

    { path: '**', redirectTo: 'perdido' },
];
