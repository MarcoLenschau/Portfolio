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
    "angular",
    "typescript",
    "javascript",
    "html",
    "css",
    "restapi",
    "firebase",
    "git",
    "material-design",
    "scrum"
  ]
  learningSkills = [
    "react",
    "vue"
  ]
}
