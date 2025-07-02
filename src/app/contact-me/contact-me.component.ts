import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AnimationService } from '../services/animation.service';
import { FirefoxDetectionService } from '../services/firefox-detection.service';
@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  validate = false;

  contactData = {
    name: "",
    email: "",
    subject: ""
  }
 
  http = inject(HttpClient);
  public firefoxService = inject(FirefoxDetectionService);

  post = {
    endPoint: 'https://marco-lenschau.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private router: Router, private animation: AnimationService) {
    const images = document.getElementsByClassName("form-container");
    this.animation.addAnimationToImages(images);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.isCheckboxValid()) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            document.getElementsByClassName("checkbox")[0].classList.remove("checked");
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            const message = document.getElementById("error") as HTMLTextAreaElement;
            message.classList.remove("error-disable");
            message.classList.add("valid-message");
            message.innerText = "Your message was sent successfully.";
          }
        });
    } else if (!this.isCheckboxValid()) {
      const message = document.getElementById("error") as HTMLTextAreaElement;
      document.getElementsByClassName("checkbox")[0].classList.add("invalid");
      message.classList.remove("error-disable");
      message.classList.remove("valid-message");
      message.innerText = "Please accept the privacy policy";
      this.invalidText('email');
      this.invalidText('name');
      this.invalidText('message');
    }
  }

  isCheckboxValid() {
    return document.getElementsByClassName("checkbox")[0].classList.contains("checked");
  }

  checkOrUncheck() {
    let checkbox = document.getElementsByClassName("checkbox")[0]; 
    checkbox.classList.toggle("checked");
    checkbox.classList.remove("invalid");
    document.getElementById("error")?.classList.add("error-disable");
  }

  invalidText(id: string) {
    let error = document.getElementById(id + "-error") as HTMLTextAreaElement;
    let subject = document.getElementById(id) as HTMLTextAreaElement;
    if (!subject.value || subject.value.trim() === '' || subject.validity.valid === false) {
      subject.placeholder = "  Your " + id + " is requrired";
      subject.classList.add("invalid-text");
      error.classList.remove("distance");
      error.classList.add("error-message");
      error.innerHTML = "Your " + id + " is required";
    } else {
      subject.classList.remove("invalid-text");
      error.classList.add("distance");
      error.classList.remove("error-message");
      error.innerHTML = "Your " + id;
    }
  }

  switchToPrivacyPolicy() {
    this.router.navigate(['/privacy']);   
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
