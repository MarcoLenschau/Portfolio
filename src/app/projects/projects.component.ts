import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {    
      name: "El-Pollo-Loco",
      info: [
        "A browser-based 2D jump-and-run game built with HTML5 Canvas.",
        "Control a hero, collect bottles, and defeat enemies.",       
        "Set in a colorful cartoon world with classic platformer mechanics."
      ], 
      info_headline: [ 
        "About the project", 
        "How I have organised my work process",
        "What I have learnt" 
      ], 
      technology: ["HTML", "CSS", "JavaScript"], 
      screenshot: "el-pollo-loco.png"
    },
    {    
      name: "Join",
      info: [
        "Join is a Kanban board that can be used to visually organise tasks and track progress."
      ], 
      info_headline: [ 
        "About the project", 
        "How I have organised my work process",
        "My group work experience" 
      ], 
      technology: ["HTML", "CSS", "JavaScript", "Firebase"], 
      screenshot: "join.png"
    }
  ];
  active = 0;

  sendProjectData(index: number) {
    this.active = index;
  }
}