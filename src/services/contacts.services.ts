import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Contact } from 'src/app/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private _contacts: Contact[] = [];
  private _error: string = '';

  constructor(private readonly http: HttpClient) {}
  public fetchContacts(): void {
    // Angular does not use promises, it uses Observables.
    this.http.get<Contact[]>('http://localhost:3000/contacts').subscribe(
      (contacts: Contact[]) => {
        this._contacts = contacts;
      },
      (error: HttpErrorResponse) => {
        this._error = error.message;
      }
    );
  }

  public contacts(): Contact[] {
    return this._contacts;
  }

  public error(): string {
    return this._error;
  }
}
