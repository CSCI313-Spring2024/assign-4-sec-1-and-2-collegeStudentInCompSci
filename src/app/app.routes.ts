import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactComponent } from './contacts/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';

export const routes: Routes = [

    {
        path: "",
        component: ContactComponent,
        title: "Home"
    },

    {
        path: "add",
        component: AddContactComponent,
        title: "Add Contact"
    },

    {
        path: "edit/:id",
        component: EditContactComponent,
        title: "Edit Contact"
    }

];
