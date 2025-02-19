import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import LocalePt from '@angular/common/locales/pt';
import { provideImgixLoader, registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './interceptor/http.interceptor';
import { provideTranslate } from './app.translate';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
registerLocaleData(LocalePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //toda requisição passa por ele
    provideHttpClient(
      withInterceptors([httpInterceptor])
    ),
    provideTranslate(),
    //link para pegar as imagens
    provideImgixLoader('http://localhost:4200/assets/'),
    //animações
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'pt-BR' }]
};
