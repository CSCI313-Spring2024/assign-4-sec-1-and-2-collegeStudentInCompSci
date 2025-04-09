import { Injectable, signal } from '@angular/core';
import { contacts } from './contact-data';
import { Contact } from './contact';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts = contacts;

  removeContact(index:number) {
    this.contacts.splice(index,1)
  }

  constructor() { }


}
