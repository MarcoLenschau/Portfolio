import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() name = ""; 
  @Input() info = [""];  
  @Input() technology = [""]; 
  @Input() screenshot = "";   
}
