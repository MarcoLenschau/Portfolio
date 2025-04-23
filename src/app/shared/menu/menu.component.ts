import { Component } from '@angular/core';
import { TranslateLanguageService } from '../../services/translate-language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  languages = ["de", "en", "es"];
  sections = ["Why me", "Skills", "Projects", "Contact"];


  constructor(public translate: TranslateLanguageService) {

  }

  toogleMenu() {
    document.querySelector(".container")?.classList.toggle("change");
    document.querySelector(".menu-items")?.classList.toggle("disable");
    document.querySelector(".picture-from-me")?.classList.toggle("d_none");
  }
}
