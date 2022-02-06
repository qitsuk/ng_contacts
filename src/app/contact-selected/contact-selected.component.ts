import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/services/contacts.services';
import { SelectedContactService } from 'src/services/selected-contact.service';

@Component({
  selector: 'app-contact-selected',
  templateUrl: 'contact-selected.component.html',
  styleUrls: ['contact-selected.component.css'],
})
export class ContactSelectedComponent {
  constructor(
    private readonly selectedContactService: SelectedContactService
  ) {}

  get contact(): Contact | null {
    return this.selectedContactService.contact();
  }
}
