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
  @Input() fname!:string;
  @Input() lname!:string;
  @Input() phone!:string;
  @Input() id!:number;


  contactsService = inject(ContactsService);
  contacts:Contact[]  = []

  removeSelf(){
    this.contactsService.removeContact(this.id)
  }
  ngOnInit(): void {
      this.contacts = this.contactsService.contacts
  }
}
