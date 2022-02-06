import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactCreatePage } from "./contact-create/contact-create.page";
import { ContactsPage } from "./contacts/contacts.page";

const routes: Routes= [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/contacts"
  },
  {
    path: "contacts",
    component: ContactsPage
  },
  {
    path: "contacts/create",
    component: ContactCreatePage
  }

]



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
