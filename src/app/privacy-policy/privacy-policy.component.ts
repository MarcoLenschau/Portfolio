import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HeaderMobileComponent } from '../shared/header-mobile/header-mobile.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, HeaderMobileComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
