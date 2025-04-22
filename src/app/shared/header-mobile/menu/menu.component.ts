import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  toogleMenu() {
    document.querySelector(".container")?.classList.toggle("change");
    document.querySelector(".menu-items")?.classList.toggle("disable");
    document.querySelector(".picture-from-me")?.classList.toggle("d_none");
  }
}
