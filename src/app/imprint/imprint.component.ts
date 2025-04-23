import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HeaderMobileComponent } from '../shared/header-mobile/header-mobile.component';
import { MenuComponent } from '../shared/menu/menu.component';

@Component({
  selector: 'app-imprint',
  imports: [TranslateModule, HeaderComponent, HeaderMobileComponent, MenuComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
}