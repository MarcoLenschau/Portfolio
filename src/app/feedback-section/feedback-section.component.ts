import { Component } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-feedback-section',
  imports: [CommonModule ,FeedbackComponent, TranslateModule],
  templateUrl: './feedback-section.component.html',
  styleUrl: './feedback-section.component.scss'
})
export class FeedbackSectionComponent {
  feedbacks = [
    {
      owner: "Kai",
      project: "Kochwelt",
      text: "Was a strong support in the team. Contributed her own ideas. The collaboration was really pleasant and efficient.",
      link: "https://de.linkedin.com/in/kai-schulz-53207b1a6?trk=public_post_feed-actor-name"
    },
    {
      owner: "Borna",
      project: "Join",
      text: "Marco works extremely quickly and purposefully - you can just tell that he enjoys coding and really enjoys it. His enthusiasm is infectious!",
      link: ""
    }
  ];
}
