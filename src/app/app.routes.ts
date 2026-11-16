import { Routes } from '@angular/router';
import { Login } from './telas/login/login';
import { DashboardMestre } from './telas/mestrices/dashboard-mestre/dashboard-mestre';
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
import { CampanhasUsuariosList } from './telas/mestrices/lists/campanhas-list/campanhas-usuarios-list/campanhas-usuarios-list';
import { CampanhasUsuariosForm } from './telas/mestrices/lists/campanhas-list/campanhas-usuarios-list/campanhas-usuarios-form/campanhas-usuarios-form';
import { Aventurices } from './telas/aventurices/aventurices';
import { CampanhasAventureiroList } from './telas/aventurices/lists/campanhas-aventureiro-list/campanhas-aventureiro-list';
import { PersonagensList } from './telas/aventurices/lists/personagens-list/personagens-list';
import { PersonagensForm } from './telas/aventurices/lists/personagens-list/personagens-form/personagens-form';

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
                    { path: 'campanhasList/:campanhaId/usuarios', component: CampanhasUsuariosList },
                    { path: 'campanhasList/:campanhaId/usuarios/novo', component: CampanhasUsuariosForm },
                    { path: 'campanhasList/:campanhaId/usuarios/:usuarioCampanhaId', component: CampanhasUsuariosForm },
                ],
            },
        ],
    },

    {
        path: 'aventurices',
        component: Aventurices,
        children: [
            {
                path: '',
                redirectTo: 'campanhas-aventureiro-list',
                pathMatch: 'full',
            },

            { path: 'campanhas-aventureiro-list', component: CampanhasAventureiroList },

            { path: 'personagens-list', component: PersonagensList },
            { path: 'personagens-list/novo', component: PersonagensForm },
            { path: 'personagens-list/:id', component: PersonagensForm },
        ],
    },

    { path: 'trapaceiro', component: Trapaceiro },

    { path: 'perdido', component: Perdido },

    { path: '**', redirectTo: 'perdido' },
];
