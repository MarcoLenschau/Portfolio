import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Feedback } from '../interfaces/feedback.interfaces';
import { Project } from '../interfaces/project.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  feedbacks: Feedback[] = [];
  projects: Project[] = [];

  constructor(public firestore: Firestore) {
    this.loadData("feedback");
    this.loadData("projects");
  }

  loadData(collectionId: 'feedback' | 'projects') {
    collectionData(collection(this.firestore, collectionId)).subscribe((objects)=> {
      if (collectionId === 'feedback') {
        objects.forEach((feedback) => {
          this.feedbacks.push(this.getCleanFeedback(feedback))
        })
      } else {
        objects.forEach((project) => {
          this.projects.push(this.getCleanProject(project));
        })
      }
    });
  }

  getCleanFeedback(obj: any):Feedback {
    return {
      owner: obj.owner, 
      project: obj.project, 
      text: obj.text,
      link: obj.link
    }
  }

  getCleanProject (obj: any):Project {
    return {
      name: obj.name, 
      info: obj.info, 
      info_headline: obj.info_headline,
      technology: obj.technology,
      screenshot: obj.screenshot
    }
  }
}
