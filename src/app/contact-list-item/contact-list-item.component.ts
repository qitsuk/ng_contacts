import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Contact } from "../models/contact.model";

@Component({
  selector: "app-contact-list-item",
  templateUrl: "contact-list-item.component.html",
  styleUrls: ["contact-list-item.component.css"]
})

export class ContactListItemComponent {
  @Input() contact: Contact | undefined;
  @Output() clicked: EventEmitter<Contact> = new EventEmitter();
  public onContactClicked(): void {
    this.clicked.emit(this.contact);
  }
}
