import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { doc } from '@angular/fire/firestore';

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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.isCheckboxValid()) {
      console.log(this.contactData)
      console.log(ngForm)
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (!this.isCheckboxValid()) {
      document.getElementsByClassName("checkbox")[0].classList.add("invalid");
      document.getElementsByClassName("error-disable")[0].classList.remove("error-disable");
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
}
