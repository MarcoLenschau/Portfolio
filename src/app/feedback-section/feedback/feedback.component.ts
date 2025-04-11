import { Component, Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback',
  imports: [TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  @Input() index = 0;
  constructor(public firestore: FirestoreService) {}
}
