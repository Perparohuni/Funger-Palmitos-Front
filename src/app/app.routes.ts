import { Routes } from '@angular/router';
import { Login } from './telas/login/login';
import { DashboardMestre } from './telas/dashboard-mestre/dashboard-mestre';
import { Campanhas } from './telas/campanhas/campanhas';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'dashboardMestre', component: DashboardMestre},
    {path: 'campanhas', component: Campanhas},

    {path:'**', redirectTo:'login'}
];
