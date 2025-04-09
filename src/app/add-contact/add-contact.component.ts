import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add-contact',
  imports: [RouterLink],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  contactsService = inject(ContactsService)
  onCancel(){

  }
  onAdd(){

  }
}
