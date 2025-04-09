import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  contactsService = inject(ContactsService)
  fname:string = ""
  lname:string = ""
  phone:string = ""
  onAdd(){
    this.contactsService.addContact(this.fname,this.lname, this.phone)
  }
}
