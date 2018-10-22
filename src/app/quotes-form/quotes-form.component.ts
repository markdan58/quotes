import { Component, OnInit, Output } from "@angular/core";
import { Quote, QuotesList } from "../quotes";


@Component({
  selector: "app-quotes-form",
  templateUrl: "./quotes-form.component.html",
  styleUrls: ["./quotes-form.component.css"]
})
export class QuotesFormComponent implements OnInit {
  quote = new Quote("", "", "");

  onSubmit() {
    QuotesList.push(this.quote);
    this.quote = new Quote("", "", "");
  }

  constructor() {}

  ngOnInit() {}
}
