import { Component } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-hero',
  imports: [MenuComponent, LogoComponent, TranslateModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
}
