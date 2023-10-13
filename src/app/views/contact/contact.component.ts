import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public firstname: string = "";
  public email: string = "";
  public message: string = "";

  sendMessage() {
    const name= this.firstname;
    const email = this.email;
    const msg = this.message;
    console.log(name + " " + email + " " + msg)

    this.firstname ="";
    this.email ="";
    this.message ="";
  }
}
