import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillImages = [
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Rest-Api",
    "Firebase",
    "GIT",
    "Material Design",
    "Scrum"
  ]
  learningSkills = [
    "React",
    "Vue Js"
  ]
}
