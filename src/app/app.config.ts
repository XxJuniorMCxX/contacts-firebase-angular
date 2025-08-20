import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'contacts-angular-17dcd',
        appId: '1:815795356010:web:6693be24cc28ba59996513',
        storageBucket: 'contacts-angular-17dcd.firebasestorage.app',
        apiKey: 'AIzaSyDsBHGDS2CBdiQY3CyfDcAuf0SKm4HTwo8',
        authDomain: 'contacts-angular-17dcd.firebaseapp.com',
        messagingSenderId: '815795356010',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
