import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  intervall: any;
  
  constructor() { }

  addAnimationToImages(skillImages: any) {
    this.intervall = setInterval(() => {
      for (let i = 0; i < skillImages.length; i++) {
        const skillImage = skillImages[i];
        this.animation(skillImage);
      }      
    },1000);
  }


  animation(skillImages: any) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          clearInterval(this.intervall);
          skillImages.classList.add("animation");
        }
        else {
          skillImages.classList.remove("animation");
        }
      });
    }, { threshold: 0 });
    
    if (skillImages) {
      observer.observe(skillImages);
    }
  }
}
