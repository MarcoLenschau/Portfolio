import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';
import { TranslateLanguageService } from '../../services/translate-language.service';
import { doc } from '@angular/fire/firestore';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LogoComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isScrolled = false;
  languages = ["de", "en", "es"];
  sections = ["Why me", "Skills", "Projects", "Contacts"];

  constructor(public translate: TranslateLanguageService) {
    this.showHeader();
  }

  showHeader() {
    setInterval(() => {
      if (!this.isScrolled && window.scrollY > 700) {
        this.isScrolled = true;
      } else if (this.isScrolled && window.scrollY < 700) {
        this.isScrolled = false;
      }
    },100);
  }
}
