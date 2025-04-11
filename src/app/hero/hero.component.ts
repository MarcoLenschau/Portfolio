import { Component } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-hero',
  imports: [LogoComponent, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
