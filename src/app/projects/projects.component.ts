import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'El Pollo Loco',
      info: [
        'A browser-based 2D jump-and-run game built with HTML5 Canvas.',
        'Control a hero, collect bottles, and defeat enemies.',
        'Set in a colorful cartoon world with classic platformer mechanics.'
      ],
      technology: ['HTML', 'CSS', 'JavaScript'],
      screenshot: 'el_pollo_loco.png'
    },
    {
      name: 'Pokedex',
      info: [
        'An interactive Pokédex app that fetches data from a REST API.',
        'Browse and view detailed information about various Pokémon.',
        'Features a clean and modern UI focused on user experience.'
      ],
      technology: ['HTML', 'CSS', 'JavaScript', 'Rest-API'],
      screenshot: 'pokedex.png'
    },
    {
      name: 'Join',
      info: [
        'A web-based task management app inspired by Trello and Asana.',
        'Create, assign, and organize tasks with drag-and-drop functionality.',
        'Perfect for team collaboration and efficient workflow organization.'
      ],
      technology: ['HTML', 'CSS', 'JavaScript'],
      screenshot: 'join.png'
    }
  ];
  active = 0;
  sendProjectData(index: number) {
    this.active = index;
  }
}
