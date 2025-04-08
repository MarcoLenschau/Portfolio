import { Component } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-feedback-section',
  imports: [CommonModule ,FeedbackComponent],
  templateUrl: './feedback-section.component.html',
  styleUrl: './feedback-section.component.scss'
})
export class FeedbackSectionComponent {
  feedbacks = [
    {
      'owner': 'Marco',
      'project': 'Join',
      'text': 'Very good code style',
      'link': ''
    },
    {
      'owner': 'Marco',
      'project': 'Join',
      'text': 'Very good code style',
      'link': ''
    },
    {
      'owner': 'Marco',
      'project': 'Join',
      'text': 'Very good code style',
      'link': ''
    }
  ];
}
