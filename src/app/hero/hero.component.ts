import { Component } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HeaderMobileComponent } from '../shared/header-mobile/header-mobile.component';
import { MenuComponent } from '../shared/menu/menu.component';

@Component({
  selector: 'app-hero',
  imports: [LogoComponent, HeaderMobileComponent, TranslateModule, CommonModule, MenuComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
}
