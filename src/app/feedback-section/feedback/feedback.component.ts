import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Feedback } from '../../interfaces/feedback.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  imports: [TranslateModule, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  @Input() feedback: Feedback = {
    owner: "",
    project: "",
    text: "",
    link: ""
  };
}
