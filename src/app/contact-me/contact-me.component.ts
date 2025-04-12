import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms'

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

  onSubmit() {
    console.log(this.contactData)
  }
}
