import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { RouterLink } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactsService = inject(ContactsService);
  contacts:Contact[]  = []

  removeSelf(id : number){
    this.contactsService.removeContact(id)
  }
  ngOnInit(): void {
      this.contacts = this.contactsService.contacts
  }
}
