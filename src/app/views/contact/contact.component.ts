import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactFields = [
    { name: 'firstname', type: 'text', placeholder: 'Firstname..' },
    { name: 'email', type: 'email', placeholder: 'Email..' },
  ];
  textarea = { name: 'message', placeholder: 'Message..' };

  onSubmitContact(inputData: { [key: string]: string }) {
    console.log("Name:", inputData['firstname'], "Email:", inputData['email'], "Message:", inputData['message']);
  }
}
