import { Component, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  router = inject(Router);
  
  switchToImprint() {
    this.router.navigate(['/imprint']);   
  }

  switchToPrivacy() {
    this.router.navigate(['/privacy']);   
  }
}
