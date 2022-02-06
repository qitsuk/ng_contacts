import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/contacts.services';
import { SelectedContactService } from 'src/services/selected-contact.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  constructor(private readonly contactService: ContactService,
    private readonly selectedContactService: SelectedContactService) {}
  ngOnInit(): void {
    this.contactService.fetchContacts();
  }
  get contacts(): Contact[] {
    return this.contactService.contacts();
  }

  handleContactClicked(contact: Contact): void {
    this.selectedContactService.setContact(contact);
  }
}
