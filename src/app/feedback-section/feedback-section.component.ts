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
      owner: "David",
      project: "Kochwelt",
      text: "Was a strong support in the team. Contributed her own ideas. The collaboration was really pleasant and efficient.",
      link: ""
    }
  ];
}
