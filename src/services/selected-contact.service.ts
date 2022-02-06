import { Injectable } from "@angular/core";
import { Contact } from "src/app/models/contact.model";


@Injectable({
  providedIn: "root"
})

export class SelectedContactService {
  private _contact: Contact | null = null;

  public setContact(contact: Contact) {
    this._contact = contact;
  }

  public contact(): Contact | null {
    return this._contact;
  }
}
