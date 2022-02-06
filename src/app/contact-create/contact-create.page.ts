
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact-create",
  templateUrl: "contact-create.page.html",
  styleUrls: ["contact-create.page.css"]
})

export class ContactCreatePage {
  public onSubmit(createForm: NgForm): void {
    console.log(createForm.valid);
  }

}
