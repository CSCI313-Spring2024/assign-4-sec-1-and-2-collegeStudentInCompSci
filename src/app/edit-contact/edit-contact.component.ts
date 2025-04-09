import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit {
  id = input.required<number>();
  contactsService = inject(ContactsService);
  contacts:Contact[] = this.contactsService.contacts;
  contact!:Contact;  
  fname!:string;
  lname!:string;
  phone!:string;

  commitChanges() {
    this.contactsService.editContact(this.id(),this.fname,this.lname,this.phone)
  }

  ngOnInit(): void {
      console.log(this.id())
      this.contact = this.contacts[this.id()];
      this.fname = this.contact.fname
      this.lname = this.contact.lname
      this.phone = this.contact.phone
  }
}
