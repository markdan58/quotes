import { Component } from "@angular/core";
import { Quote, QuotesList } from './quotes';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  quote = new Quote("", "", "");

  onSubmit() {
    QuotesList.push(this.quote);
    this.quote = new Quote("", "", "");
  }

  constructor() { }

  ngOnInit() {
  }

}


