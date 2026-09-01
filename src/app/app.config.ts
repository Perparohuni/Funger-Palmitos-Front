import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { MessageService } from 'primeng/api';
import { erroInterceptor } from './interceptors/erro.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        providePrimeNG({
            theme: {
                preset: Lara,
                options: {
                    darkModeSelector: false || 'none',
                },
            },
        }),
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),

        provideHttpClient(withInterceptors([authInterceptor, erroInterceptor])),
        MessageService,
    ],
};
