import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() index = 0;

  constructor(public firestore: FirestoreService) {}
}
