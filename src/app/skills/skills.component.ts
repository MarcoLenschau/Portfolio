import { Component } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule],
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
    "Scrum",
    "Linux",
    "Docker"
  ]
  learningSkills = [
    "React",
    "Vue Js"
  ]

  constructor(private animation: AnimationService) {
    const images = document.getElementsByClassName("skill-image");
    this.animation.addAnimationToImages(images);
  }
}
