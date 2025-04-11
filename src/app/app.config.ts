import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {provideTranslateService} from "@ngx-translate/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "portfolio-536fa", appId: "1:269607546549:web:c47db5e44dec17236dd8fc", storageBucket: "portfolio-536fa.firebasestorage.app", apiKey: "AIzaSyCZBEG_BcNxR0ns9H7NxHqjcxEW_ye5EdQ", authDomain: "portfolio-536fa.firebaseapp.com", messagingSenderId: "269607546549" })), provideFirestore(() => getFirestore()),
    provideZoneChangeDetection({ eventCoalescing: true }), provideTranslateService({ defaultLanguage: 'en'})
  ]
};
