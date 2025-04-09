import { Injectable, signal } from '@angular/core';
import { contacts } from './contact-data';
import { Contact } from './contact';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts = contacts;

  addContact( firstName:string, lastName:string, phoneNumber:string ){
    this.contacts.push( {fname: firstName, lname: lastName, phone: phoneNumber})
  }
  removeContact(index:number) {
    this.contacts.splice(index,1)
  }

  editContact(index:number, firstName:string, lastName:string, phoneNumber:string ){
    this.contacts[index] ={
      fname: firstName,
      lname: lastName,
      phone: phoneNumber
    }
  }

  constructor() { }


}
