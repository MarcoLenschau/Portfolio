import { Component, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';
import { TranslateLanguageService } from '../../services/translate-language.service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { FirefoxDetectionService } from '../../services/firefox-detection.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LogoComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languages = ["de", "en", "es"];
  sections = ["Why me", "Skills", "Projects", "Contact"];
  public firefoxService = inject(FirefoxDetectionService);

  constructor(private router: Router, public translate: TranslateLanguageService){}
  
  switchSite() {    
    this.router.navigate(['/']); 
  }
}
