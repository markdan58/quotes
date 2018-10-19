import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quotes";

@Component({
  selector: "app-quotes-form",
  templateUrl: "./quotes-form.component.html",
  styleUrls: ["./quotes-form.component.css"]
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quote("","","");
  @Output() addQuote=new EventEmitter<Quote>();

  ngOnInit() {}

  submitQuotes() {
    this.addQuote.emit(this.newQuote);
    alert('');
  }
}
