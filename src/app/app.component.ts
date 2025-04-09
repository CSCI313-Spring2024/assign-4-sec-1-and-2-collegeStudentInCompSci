import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactComponent } from './contacts/contact.component';
import { ContactsService } from './contacts.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ContactComponent, AddContactComponent,EditContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'assignment-4-levene';
  contactsService = inject(ContactsService)
  contacts: {fname:string, lname:string, phone:string}[]=[]
  focus: string = "list"
  changeFocus(cmd : string) {
    this.focus = cmd
  }
  ngOnInit(): void {
      this.contacts = this.contactsService.contacts
  }
}
