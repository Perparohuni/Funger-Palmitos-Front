import { Routes } from '@angular/router';
import { Login } from './telas/login/login';
import { DashboardMestre } from './telas/mestrices/dashboard-mestre/dashboard-mestre';
import { Campanhas } from './telas/campanhas/campanhas';
import { CampanhasList } from './telas/mestrices/campanhas-list/campanhas-list';
import { Mestrices } from './telas/mestrices/mestrices';

export const routes: Routes = [
    {path: 'login', component: Login},

    {path: 'mestrices', component: Mestrices, children: 
        [
        {
            path:'', redirectTo: 'dashboardMestre', pathMatch:'full'
        },
        {
            path: 'dashboardMestre', component: DashboardMestre
        },
        {
            path:'campanhasList', component: CampanhasList
        }
        ]},

    {path: 'campanhas', component: Campanhas},

    {path:'**', redirectTo:'login'}
];
