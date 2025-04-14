import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateLanguageService } from '../../../services/translate-language.service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  languages = ["de", "en", "es"];
  sections = ["Why me", "Skills", "Projects", "Contacts"];
  
  constructor(public translate: TranslateLanguageService) {}

  toogleMenu() {
    document.querySelector(".container")?.classList.toggle("change");
    document.querySelector(".menu-items")?.classList.toggle("disable");

  }
}
