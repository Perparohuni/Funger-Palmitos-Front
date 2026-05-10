import { Routes } from '@angular/router';
import { Login } from './telas/login/login';
import { DashboardMestre } from './telas/dashboard-mestre/dashboard-mestre';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'dashboardMestre', component: DashboardMestre},

    {path:'**', redirectTo:'login'}
];
