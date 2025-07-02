import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirefoxDetectionService {
  firefoxDetected = false;

  constructor() {
    this.isFirefox();
  }

  isFirefox() {
    const ua = navigator.userAgent;
    if (ua.indexOf('Firefox') > -1) { 
      this.firefoxDetected = true;
    }
  }
}
