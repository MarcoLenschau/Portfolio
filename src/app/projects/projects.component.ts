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
        "I optimized my development workflow through disciplined Git practices and strict adherence to Clean Code principles.",       
        "I implemented robust OOP principles in JavaScript through classes and inheritance, optimizing code for maintainability and scalabilit."
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
        "Join is a Kanban board that can be used to visually organise tasks and track progress.",
        "I divided my workflow into small, structured steps and documented the progress with Git.",
        "I was able to demonstrate my teamwork skills in the group work and contribute to the successful realisation of the project through clear communication."
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