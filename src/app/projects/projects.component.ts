import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../services/firestore.service';
@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  active = 0;
  

  constructor(public firestore: FirestoreService) {}

  sendProjectData(index: number) {
    this.active = index;
  }
}