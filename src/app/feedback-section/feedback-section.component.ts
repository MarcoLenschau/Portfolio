import { Component } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-feedback-section',
  imports: [CommonModule ,FeedbackComponent],
  templateUrl: './feedback-section.component.html',
  styleUrl: './feedback-section.component.scss'
})
export class FeedbackSectionComponent {
  constructor(public firestore: FirestoreService) {}
}
