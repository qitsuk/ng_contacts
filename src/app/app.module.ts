import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactSelectedComponent } from './contact-selected/contact-selected.component';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ContactsPage } from './contacts/contacts.page';
import { AppRoutingModule } from './app-routing.module';
import { ContactCreatePage } from './contact-create/contact-create.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactSelectedComponent,
    ContactListItemComponent,
    ContactsPage,
    ContactCreatePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
