import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import translationsEN from "../../../public/assets/i18n/en.json";
import translationsDE from "../../../public/assets/i18n/de.json";
import translationsES from "../../../public/assets/i18n/es.json";

@Injectable({
  providedIn: 'root'
})

export class TranslateLanguageService {

  currentLang = "en";

  constructor(public translate: TranslateService) {
    translate.setTranslation('en', translationsEN);
    translate.setTranslation('de', translationsDE);
    translate.setTranslation('es', translationsES);
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}
