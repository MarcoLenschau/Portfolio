import { Component } from '@angular/core';
import { WhyMeComponent } from '../why-me/why-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FeedbackSectionComponent } from '../feedback-section/feedback-section.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
@Component({
  selector: 'app-main',
  imports: [WhyMeComponent, SkillsComponent, ProjectsComponent, FeedbackSectionComponent, ContactMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
