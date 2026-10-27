import { Routes } from '@angular/router';
import { Login } from './telas/login/login';
import { DashboardMestre } from './telas/mestrices/dashboard-mestre/dashboard-mestre';
import { Campanhas } from './telas/campanhas/campanhas';
import { Mestrices } from './telas/mestrices/mestrices';
import { mestreGuard } from './guards/mestre-guard';
import { Perdido } from './rota-errada/perdido/perdido';
import { Trapaceiro } from './rota-errada/trapaceiro/trapaceiro';
import { SistemasList } from './telas/mestrices/lists/sistemas-list/sistemas-list';
import { SistemasForm } from './telas/mestrices/lists/sistemas-list/sistemas-form/sistemas-form';
import { CampanhasList } from './telas/mestrices/lists/campanhas-list/campanhas-list';
import { CampanhasForm } from './telas/mestrices/lists/campanhas-list/campanhas-form/campanhas-form';
import { UsuariosList } from './telas/mestrices/lists/usuarios-list/usuarios-list';
import { UsuariosForm } from './telas/mestrices/lists/usuarios-list/usuarios-form/usuarios-form';

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
                redirectTo: 'sistemas-list',
                pathMatch: 'full',
            },

            { path: 'sistemas-list', component: SistemasList },
            { path: 'sistemas-list/novo', component: SistemasForm },
            { path: 'sistemas-list/:id', component: SistemasForm },

            { path: 'usuarios-list', component: UsuariosList },
            { path: 'usuarios-list/novo', component: UsuariosForm },
            { path: 'usuarios-list/:id', component: UsuariosForm },

            {
                path: ':sistema',
                component: DashboardMestre,
                children: [
                    { path: 'campanhasList', component: CampanhasList },
                    { path: 'campanhasList/novo', component: CampanhasForm },
                    { path: 'campanhasList/:id', component: CampanhasForm },
                ],
            },
        ],
    },

    { path: 'campanhas', component: Campanhas },

    { path: 'trapaceiro', component: Trapaceiro },

    { path: 'perdido', component: Perdido },

    { path: '**', redirectTo: 'perdido' },
];
