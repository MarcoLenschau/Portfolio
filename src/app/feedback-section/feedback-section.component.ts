import { Component } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

export interface Feedback {
  owner: string;
  project: string;
  text: string;
  link: string
}

@Component({
  selector: 'app-feedback-section',
  imports: [CommonModule ,FeedbackComponent],
  templateUrl: './feedback-section.component.html',
  styleUrl: './feedback-section.component.scss'
})
export class FeedbackSectionComponent {
  feedbacks = [{}];
  
  constructor(private firestore: Firestore) {
    const colRef = collection(this.firestore, 'feedback');
    collectionData(colRef).subscribe(feedbacks => {
      this.feedbacks = feedbacks;
    });  
  }
}
