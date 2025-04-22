import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import translationsEN from "../../../public/assets/i18n/en.json";
import translationsDE from "../../../public/assets/i18n/de.json";
import translationsES from "../../../public/assets/i18n/es.json";

@Injectable({
  providedIn: 'root'
})

export class TranslateLanguageService {

  currentLang: any;

  constructor(public translate: TranslateService) {
    translate.setTranslation('en', translationsEN);
    translate.setTranslation('de', translationsDE);
    translate.setTranslation('es', translationsES);
    this.setLanguage();
  }


  setLanguage() {
    this.currentLang = localStorage.getItem("lang");
    console.log(this.currentLang)
    if (this.currentLang != null) {
      this.translate.setDefaultLang(this.currentLang);  
    } else {
      this.translate.setDefaultLang("en");  
      localStorage.setItem("lang", "en");
      this.currentLang = localStorage.getItem("lang");

    }
  }

  switchLanguage(lang: string): void {
    localStorage.setItem("lang", lang);
    this.setLanguage();
  }
}
