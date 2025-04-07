import { Component } from '@angular/core';
import { WhyMeComponent } from '../why-me/why-me.component';

@Component({
  selector: 'app-main',
  imports: [WhyMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
