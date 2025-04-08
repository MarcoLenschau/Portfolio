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
      name: 'El-Pollo-Loco',
      info: [
        'A browser-based 2D jump-and-run game built with HTML5 Canvas.',
        'Control a hero, collect bottles, and defeat enemies.',
        'Set in a colorful cartoon world with classic platformer mechanics.'
      ],
      info_headline: [
        '2D Platformer in the Browser',
        'Play as a Hero',
        'World with Classic Gameplay'
      ],
      technology: ['HTML', 'CSS', 'JavaScript'],
      screenshot: 'el-pollo-loco.png'
    },
    {
      name: 'Join',
      info: [
        'A web-based task management app inspired by Trello and Asana.',
        'Create, assign, and organize tasks with drag-and-drop functionality.',
        'Perfect for team collaboration and efficient workflow organization.'
      ],
      info_headline: [
        'Web-Based Task Management',
        'Drag & Drop Task Handling',
        'Built for Team Collaboration'
      ],
      technology: ['HTML', 'CSS' ,'JavaScript', 'Firebase'],
      screenshot: 'join.png'
    }
  ];
  active = 0;
  sendProjectData(index: number) {
    this.active = index;
  }
}
