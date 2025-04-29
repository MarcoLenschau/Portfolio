import { Component } from '@angular/core';
import { TranslateLanguageService } from '../../services/translate-language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  languages = ["de", "en", "es"];
  sections = ["Why me", "Skills", "Projects", "Contact"];

  constructor(private router: Router, public translate: TranslateLanguageService){}

  switchSite() {    
    this.router.navigate(['/']); 
  }

  toogleMenu() {
    document.querySelector(".container")?.classList.toggle("change");
    document.querySelector(".menu-items")?.classList.toggle("disable");
    document.querySelector(".picture-from-me")?.classList.toggle("d_none");
  }
}
