import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header-mobile',
  imports: [LogoComponent, MenuComponent],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

}
