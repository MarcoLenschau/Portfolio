import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HeaderMobileComponent } from '../shared/header-mobile/header-mobile.component';
import { MenuComponent } from '../shared/menu/menu.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, HeaderMobileComponent, MenuComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
